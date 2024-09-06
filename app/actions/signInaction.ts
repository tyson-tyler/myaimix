"use server";

import * as z from "zod";

import argon2 from "argon2";
import { SignInvalidator } from "../validator/signInvalidator";

type Res =
  | { success: true }
  | {
      success: false;
      error: z.ZodFormattedError<string>;
      statusCode: 400;
    }
  | { success: false; error: "string"; statusCode: 500 };

export async function signInuserAction(values: unknown): Promise<Res> {
  const parseValues = SignInvalidator.safeParse(values);

  if (!parseValues.success) {
    return {
      success: false,
      error: parseValues.error.errors,
      statusCode: 400,
    };
  }

  const { email, password } = parseValues.data;

  try {
    const hashPassword = await argon2.hash(password);

    console.log({ email, password: hashPassword });

    return { success: true };
  } catch (err) {
    console.log(err);

    return {
      success: false,
      statusCode: 400,
      error: "Somthing went wrong",
    };
  }
}
