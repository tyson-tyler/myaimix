import { z } from "zod";

export const SignUpvalidator = z.object({
  name: z.string().optional(),
  email: z.string().email("Invalid Email"),
  password: z.string().min(8, "password must more than 8 digit "),
  //   confirmPassword: z.string().min(8, "password must more than 8 digit "),
});

export type SignUpInput = z.infer<typeof SignUpvalidator>;
