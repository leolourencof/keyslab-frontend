import { z } from "zod";

export const loginFormSchema = z.object({
  email: z
    .string()
    .email("E-mail inválido")
    .min(6, "Deve conter no mínimo 6 caracteres")
    .max(320, "Deve conter no máximo 320 caracteres"),
  password: z
    .string()
    .min(8, "Deve conter no mínimo 8 caracteres")
    .max(64, "Deve conter no máximo 64 caracteres"),
});
