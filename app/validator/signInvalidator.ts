import { z } from "zod";

export const SignInvalidator = z.object({
  email: z.string().email("Invalid Email"),
  password: z.string().min(8, "password must more than 8 digit "),
  //   confirmPassword: z.string().min(8, "password must more than 8 digit "),
});

export type SignInInput = z.infer<typeof SignInvalidator>;
