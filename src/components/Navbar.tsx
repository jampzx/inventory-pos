"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import { useUser } from "@/hooks/useUser";
import Spinner from "@/components/Spinner";

const Navbar = () => {
  const { user, loadingUseUser } = useUser();

  return (
    <div className="flex items-center justify-between p-4">
      {/* ICONS AND USER */}
      <div className="flex items-center gap-6 justify-end w-full">
        <div className="flex flex-col">
          <span className="text-xs leading-3 font-medium flex items-center gap-2">
            {loadingUseUser ? (
              <>
                <Spinner size={12} color="lamaSky" />
                <span>Loading...</span>
              </>
            ) : (
              user?.name || "Guest"
            )}
          </span>
          <span className="text-[10px] text-gray-500 text-right capitalize">
            {user?.user_type || ""}
          </span>
        </div>
        <Image
          src="/avatar.png"
          alt=""
          width={36}
          height={36}
          className="rounded-full"
        />
      </div>
    </div>
  );
};

export default Navbar;
