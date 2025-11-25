"use client";
import Image from "next/image";
import { useUser } from "@/hooks/useUser";
import Spinner from "@/components/Spinner";

const Navbar = () => {
  const { user, loadingUseUser } = useUser();

  return (
    <div className="flex items-center justify-between p-2 sm:p-4">
      {/* ICONS AND USER */}
      <div className="flex items-center gap-3 sm:gap-6 justify-end w-full">
        <div className="flex flex-col">
          <span className="text-xs leading-3 font-medium flex items-center gap-2">
            {loadingUseUser ? (
              <>
                <Spinner size={12} color="lamaSky" />
                <span className="text-xs">Loading...</span>
              </>
            ) : (
              <span className="text-xs sm:text-sm truncate max-w-[100px] sm:max-w-none">
                {user?.name || "Guest"}
              </span>
            )}
          </span>
          <span className="text-[10px] text-gray-500 text-right capitalize">
            {user?.user_type || ""}
          </span>
        </div>
        <Image
          src="/avatar.png"
          alt=""
          width={32}
          height={32}
          className="rounded-full sm:w-9 sm:h-9"
        />
      </div>
    </div>
  );
};

export default Navbar;
