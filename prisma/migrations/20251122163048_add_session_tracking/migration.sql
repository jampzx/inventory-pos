/*
  Warnings:

  - A unique constraint covering the columns `[session_token]` on the table `users` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE "users" ADD COLUMN     "last_login_at" TIMESTAMP(3),
ADD COLUMN     "session_expires_at" TIMESTAMP(3),
ADD COLUMN     "session_token" TEXT;

-- CreateIndex
CREATE UNIQUE INDEX "users_session_token_key" ON "users"("session_token");
