"use client";

import { forwardRef } from "react";
import clsx from "clsx";

const Input = forwardRef(
  (
    {
      label,
      error,
      leftIcon,
      rightIcon,
      onRightIconClick,
      className,
      required = false,
      ...props
    },
    ref
  ) => {
    return (
      <div className="space-y-2">
        {label && (
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-200">
            {label}
            {required && (
              <span className="text-red-500 ml-1">*</span>
            )}
          </label>
        )}

        <div className="relative">
          {/* Left Icon */}
          {leftIcon && (
            <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">
              {leftIcon}
            </div>
          )}

          <input
            ref={ref}
            {...props}
            className={clsx(
              "w-full rounded-xl border bg-white dark:bg-gray-900",
              "border-gray-300 dark:border-gray-700",
              "px-4 py-3",
              "outline-none",
              "transition-all duration-200",
              "focus:ring-2 focus:ring-blue-500",
              leftIcon && "pl-12",
              rightIcon && "pr-12",
              error && "border-red-500 focus:ring-red-500",
              className
            )}
          />

          {/* Right Icon */}
          {rightIcon && (
            <button
              type="button"
              onClick={onRightIconClick}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 hover:text-blue-600"
            >
              {rightIcon}
            </button>
          )}
        </div>

        {error && (
          <p className="text-sm text-red-500">
            {error}
          </p>
        )}
      </div>
    );
  }
);

Input.displayName = "Input";

export default Input;