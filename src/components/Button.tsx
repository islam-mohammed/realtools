import React from "react";

type Props = {
  varaity?: "primary" | "secondry";
  className?: string;
  children: React.ReactNode;
};

export default function Button({
  varaity = "primary",
  className,
  children,
  ...props
}: Props) {
  return (
    <button
      className={`${
        varaity === "primary" ? "bg-primary" : "bg-secondary text-sectionTitle"
      }  rounded-[10px] lg:font-medium ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
