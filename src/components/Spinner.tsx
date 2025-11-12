"use client";

import React from "react";
import clsx from "clsx";

const colorClasses: Record<string, string> = {
  lamaSky: "border-lamaSky",
  lamaPurple: "border-lamaPurple",
  lamaYellow: "border-lamaYellow",
};

type SpinnerProps = {
  size?: number;
  color?: keyof typeof colorClasses;
};

const Spinner = ({ size = 32, color = "lamaSky" }: SpinnerProps) => {
  return (
    <div
      className={clsx(
        "inline-block animate-spin rounded-full border-4 border-solid border-t-transparent",
        colorClasses[color]
      )}
      style={{
        width: `${size}px`,
        height: `${size}px`,
        borderTopColor: "transparent",
      }}
      role="status"
      aria-label="Loading..."
    />
  );
};

export default Spinner;
