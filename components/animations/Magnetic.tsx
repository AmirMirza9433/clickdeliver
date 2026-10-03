"use client";
import React from "react";
export function Magnetic({
  children,
  className = "",
}: {
  children: React.ReactNode;
  strength?: number;
  className?: string;
}) {
  return <div className={className}>{children}</div>;
}
