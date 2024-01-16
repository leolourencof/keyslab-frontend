"use client";

import Input from "../Components/Input";
import Button from "../Components/Button";
import Anchor from "../Components/Anchor";
import Label from "../Components/Label";

import Image from "next/image";
import Icon from "../assets/images/Icon.svg";
import Mail from "../assets/icons/Mail.svg";
import Lock from "../assets/icons/Lock.svg";
import Logo from "../assets/images/Logo.svg";
import SideBar from "../assets/images/SideBar.svg";

import { instance } from "../services/api.services";
import { Login } from "../types/login.types";
import { loginFormSchema } from "../schemas/login.schema";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { zodResolver } from "@hookform/resolvers/zod";

export default function Login() {
  const [isLoading, setIsLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<Login>({
    mode: "onChange",
    resolver: zodResolver(loginFormSchema),
  });

  async function sendForm(data: Login) {
    try {
      setIsLoading(true);
      await instance.post("auth/login", data, { withCredentials: true });

      setIsLoading(false);
    } catch (error) {
      toast("E-mail e/ou senha incorretos", { icon: <span>⚠️</span> });
      setIsLoading(false);
    }
  }

  return (
    <main className="h-screen w-11/12 mx-auto md:w-full md:flex md:justify-between">
      <div className="hidden md:w-full md:max-w-md md:block md:bg-blue-gradient">
        <div className="h-[calc(100%-72px)]">
          <figure className="pl-10 pt-10">
            <Image src={Logo} alt="logo" />
          </figure>

          <figure className="h-full">
            <Image src={SideBar} alt="sidebar" className="object-cover h-full w-full" />
          </figure>
        </div>
      </div>

      <div className="w-full max-w-[416px] mx-auto h-full flex justify-center items-center px-4 lg:px-0">
        <div className="w-full">
          <div>
            <h1 className="text-primary-white text-2xl font-semibold text-center">
              Entrar na conta
            </h1>

            <figure className="py-8">
              <Image src={Icon} alt="icon" className="mx-auto" />
            </figure>
          </div>

          <form onSubmit={handleSubmit(sendForm)}>
            <Input
              type="text"
              placeholder="nome@exemplo.com"
              icon={Mail}
              name="email"
              register={register}
            />
            <Label errors={errors} name="email" />

            <Input
              type="password"
              placeholder="********"
              icon={Lock}
              name="password"
              register={register}
              className="mt-5"
            />
            <Label errors={errors} name="password" />

            <div className="text-end pt-2">
              <Anchor text="Esqueci minha senha" href="#reset-password" />
            </div>

            <Button text="Entrar na conta" disabled={!isValid} isLoading={isLoading} />
          </form>

          <p className="text-sm text-primary-gray font-normal text-center">
            Ainda não tem conta?
            <Anchor text=" Registre-se." href="#register" />
          </p>
        </div>
      </div>
    </main>
  );
}
