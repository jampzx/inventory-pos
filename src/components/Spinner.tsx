"use client";

import React from "react";
import clsx from "clsx";

const colorClasses: Record<string, string> = {
  lamaSky: "border-lamaSky",
  lamaPurple: "border-lamaPurple",
  lamaYellow: "border-lamaYellow",
  white: "border-white",
  ink: "border-gray-700",
};

type SpinnerProps = {
  size?: number;
  color?: keyof typeof colorClasses;
};

const Spinner = ({ size = 32, color = "lamaSky" }: SpinnerProps) => {
  const borderWidth = Math.max(2, Math.round(size / 8));

  return (
    <div
      className={clsx(
        "inline-block animate-spin rounded-full border-solid border-t-transparent",
        colorClasses[color],
      )}
      style={{
        width: `${size}px`,
        height: `${size}px`,
        borderWidth: `${borderWidth}px`,
        borderTopColor: "transparent",
      }}
      role="status"
      aria-label="Loading..."
    />
  );
};

export default Spinner;
