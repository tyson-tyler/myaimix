"use server";

import * as z from "zod";
import argon2 from "argon2";
import { SignInvalidator } from "../validator/signInvalidator";

// Updated type definition for ZodFormattedError
type Res =
  | { success: true }
  | {
      success: false;
      error: z.ZodFormattedError<string>; // Correct type for formatted Zod error
      statusCode: 400;
    }
  | { success: false; error: string; statusCode: 500 }; // Use string for server errors

export async function signInuserAction(values: unknown): Promise<Res> {
  const parseValues = SignInvalidator.safeParse(values);

  // Check if parsing was unsuccessful and return formatted errors
  if (!parseValues.success) {
    return {
      success: false,
      error: parseValues.error.format(), // Use format() to get ZodFormattedError
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
      statusCode: 500, // Updated to 500 for internal server error
      error: "Something went wrong",
    };
  }
}
