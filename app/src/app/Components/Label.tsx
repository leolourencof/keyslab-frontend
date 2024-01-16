import { FieldErrors } from "react-hook-form";
import { Login } from "../types/login.types";

export default function Label({
  errors,
  name,
  ...rest
}: Readonly<{ errors: FieldErrors<Login>; name: string }>) {
  return (
    <label className="text-xs text-red-400 font-normal" {...rest}>
      {errors[name as "password" | "email"]?.message}
    </label>
  );
}
