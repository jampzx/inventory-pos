import type { JwtUserPayload } from "@/types/auth";
import { prisma } from "@/lib/prisma";

type SessionValidationResult = {
  valid: boolean;
};

type CacheEntry = {
  result: SessionValidationResult;
  expiresAt: number;
};

// Keep this short to cut duplicate DB work during bursty page loads
// while still honoring near-real-time session invalidation.
const SESSION_VALIDATION_TTL_MS = 10_000;
const sessionValidationCache = new Map<string, CacheEntry>();

const getCacheKey = (user: JwtUserPayload) => `${user.id}:${user.session_id}`;

const evictExpiredCache = (now: number) => {
  for (const [key, value] of sessionValidationCache.entries()) {
    if (value.expiresAt <= now) {
      sessionValidationCache.delete(key);
    }
  }
};

export async function validateSession(user: JwtUserPayload) {
  const now = Date.now();
  const cacheKey = getCacheKey(user);
  const cached = sessionValidationCache.get(cacheKey);

  if (cached && cached.expiresAt > now) {
    return cached.result;
  }

  const dbUser = await prisma.user.findUnique({
    where: { id: user.id },
    select: {
      session_token: true,
      session_expires_at: true,
    },
  });

  const isValid =
    !!dbUser &&
    !!dbUser.session_token &&
    dbUser.session_token === user.session_id &&
    (!dbUser.session_expires_at || dbUser.session_expires_at >= new Date());

  const result: SessionValidationResult = { valid: isValid };

  sessionValidationCache.set(cacheKey, {
    result,
    expiresAt: now + SESSION_VALIDATION_TTL_MS,
  });

  // Best-effort cleanup to avoid unbounded growth in long-lived instances.
  if (sessionValidationCache.size > 500) {
    evictExpiredCache(now);
  }

  return result;
}
