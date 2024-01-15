"use client";

import React, { useState } from "react";
import Image from "next/image";
import Eye from "../assets/icons/Eye.svg";
import EyeClosed from "../assets/icons/EyeClosed.svg";

export default function Input({
  type,
  placeholder,
  icon,
  style,
  ...rest
}: Readonly<{
  type: string;
  placeholder: string;
  icon: string;
  style?: string;
  name?: string;
}>) {
  const [showPassword, setShowPassword] = useState(false);

  function toogleInput(e: HTMLDivElement) {
    const inputs = document.querySelectorAll(".activatable");

    inputs.forEach((element) => {
      element.classList.add("border-secondary-gray");
      element.classList.remove("shadow-dark-blue", "border-secondary-blue");
    });

    e.classList.remove("border-secondary-gray");
    e.classList.add("shadow-dark-blue", "border-secondary-blue");
  }

  return (
    <div
      {...rest}
      onClick={(e) => toogleInput(e.currentTarget)}
      className={`flex items-center gap-4 border-2 border-secondary-gray p-4 rounded-xl w-full ${style} activatable`}
    >
      <figure>
        <Image src={icon} alt="icon" />
      </figure>

      <div className="flex items-center justify-between gap-4 w-full">
        <input
          {...rest}
          type={type === "password" && !showPassword ? "password" : "text"}
          placeholder={placeholder}
          className="text-base font-normal text-primary-gray placeholder:text-primary-gray w-full"
        />

        {type === "password" && (
          <button
            className="max-h-6 max-w-6"
            type="button"
            onClick={() => setShowPassword((prev) => !prev)}
          >
            {showPassword ? (
              <Image src={EyeClosed} alt="hide-password" />
            ) : (
              <Image src={Eye} alt="show-password" />
            )}
          </button>
        )}
      </div>
    </div>
  );
}
