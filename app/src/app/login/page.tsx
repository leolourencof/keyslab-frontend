import Input from "../Components/Input";
import Button from "../Components/Button";
import Anchor from "../Components/Anchor";

import Image from "next/image";
import Icon from "../assets/images/Icon.svg";
import Mail from "../assets/icons/Mail.svg";
import Lock from "../assets/icons/Lock.svg";
import Logo from "../assets/images/Logo.svg";
import SideBar from "../assets/images/SideBar.svg";

export default function Login() {
  return (
    <main className="h-screen w-11/12 mx-auto md:w-full md:flex md:justify-between">
      <div className="hidden md:w-full md:max-w-md md:block bg-blue-gradient">
        <div className="h-[calc(100%-72px)]">
          <figure className="pl-10 pt-10">
            <Image src={Logo} alt="logo" />
          </figure>

          <figure className="h-full">
            <Image
              src={SideBar}
              alt="sidebar"
              className="object-cover h-full w-full"
            />
          </figure>
        </div>
      </div>

      <div className="w-full max-w-[416px] mx-auto h-full flex justify-center items-center">
        <div>
          <div>
            <h1 className="text-primary-white text-2xl font-semibold text-center">
              Entrar na conta
            </h1>

            <figure className="py-8">
              <Image src={Icon} alt="icon" className="mx-auto" />
            </figure>
          </div>

          <form>
            <Input type="text" placeholder="nome@exemplo.com" icon={Mail} />
            <Input
              type="password"
              placeholder="********"
              icon={Lock}
              style="mt-5"
            />

            <div className="text-end pt-2">
              <Anchor text="Esqueci minha senha" href="#reset-password" />
            </div>

            <Button text="Entrar na conta" />
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
