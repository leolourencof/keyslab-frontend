"use client";

import React, { useState } from "react";
import { UseFormRegister } from "react-hook-form";

import Image from "next/image";
import Eye from "../assets/icons/Eye.svg";
import EyeClosed from "../assets/icons/EyeClosed.svg";

import { Login } from "../types/login.types";

export default function Input({
  name,
  register,
  ...rest
}: Readonly<{
  name: "email" | "password";
  register: UseFormRegister<Login>;
  [key: string]: string | UseFormRegister<Login>;
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
      className={`flex items-center gap-4 border-2 border-secondary-gray p-4 rounded-xl ${rest.className} activatable`}
    >
      <figure>
        <Image src={rest.icon as string} alt="icon" className="max-h-6 max-w-6" />
      </figure>

      <div className="flex items-center justify-between gap-4 w-full">
        <input
          autoComplete="off"
          {...rest}
          type={rest.type === "password" && !showPassword ? "password" : "text"}
          {...register(name)}
          className="text-base font-normal text-primary-gray placeholder:text-primary-gray w-full"
        />

        {rest.type === "password" && (
          <button type="button" onClick={() => setShowPassword((prev) => !prev)}>
            {showPassword ? (
              <Image src={EyeClosed} alt="hide-password" className="max-h-6 max-w-6" />
            ) : (
              <Image src={Eye} alt="show-password" className="max-h-6 max-w-6" />
            )}
          </button>
        )}
      </div>
    </div>
  );
}
