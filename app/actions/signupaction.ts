"use server";

import * as z from "zod";
import { SignUpvalidator } from "../validator/signUpvalidator";
import argon2 from "argon2";
import db from "../drizzle";
import { lower, users } from "../drizzle/schema";
import { eq } from "drizzle-orm";

// Updated type to distinguish between Zod validation errors and string errors
type Res =
  | { success: true }
  | {
      success: false;
      error: z.ZodIssue[]; // Zod validation error (array of issues)
      statusCode: 400;
    }
  | { success: false; error: string; statusCode: 400 | 500 }; // Server-side error as a string

export async function signupuserAction(values: unknown): Promise<Res> {
  // Parse and validate the input using Zod
  const parseValues = SignUpvalidator.safeParse(values);

  if (!parseValues.success) {
    // Return Zod's validation errors in case of failure
    return {
      success: false,
      error: parseValues.error.errors, // Zod validation errors (array of ZodIssue)
      statusCode: 400,
    };
  }

  const { name, email, password } = parseValues.data;

  try {
    // Check if a user with the same email already exists
    const existingUser = await db
      .select({ id: users.id })
      .from(users)
      .where(eq(lower(users.email), email.toLowerCase()))
      .then((res) => res[0] ?? null);

    if (existingUser?.id) {
      // Handle email already exists error, and return it as a string error
      return { success: false, error: "Email already exists", statusCode: 400 };
    }
  } catch (err) {
    console.log(err);
    // Return server-side error for database failure
    return {
      success: false,
      statusCode: 500,
      error: "Database query failed", // Server-side error for database failure
    };
  }

  try {
    // Hash the password and create a new user
    const hashPassword = await argon2.hash(password);

    const newUser = await db
      .insert(users)
      .values({
        name,
        email,
        password: hashPassword,
      })
      .returning({ id: users.id })
      .then((res) => res[0]);

    console.log({ insertedId: newUser.id });

    return { success: true };
  } catch (err) {
    console.log(err);
    // Return a server-side error if something goes wrong
    return {
      success: false,
      statusCode: 500, // 500 for internal server error
      error: "Something went wrong", // General server-side error message
    };
  }
}
