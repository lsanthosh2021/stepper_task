import React from "react";
import "./index.css";
type props = {
  title: string;
  className?: string;
  outline?: boolean;
  disabled?: boolean;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
};
export default function Button({
  title,
  outline,
  onClick,
  className,
  disabled,
  ...rest
}: props) {
  return (
    <button
      className={`btn btn-${
        outline ? "outline-" : ""
      }success h-100 rounded-3 ${className}`}
      onClick={onClick}
      disabled={disabled}
      {...rest}
    >
      {title}
    </button>
  );
}
