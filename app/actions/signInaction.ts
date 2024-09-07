"use server";

import { AuthError } from "next-auth";
import { signIn } from "../auth";

type Res =
  | { success: true }
  | { success: false; error: string; statusCode: 401 | 500 };

export async function signinActionuser(values: unknown): Promise<Res> {
  try {
    if (
      typeof values !== "object" ||
      values === null ||
      Array.isArray(values)
    ) {
      throw new Error("Invail json");
    }
    await signIn("credentials", { ...values, redirect: false });
    return { success: true };
  } catch (err) {
    if (err instanceof AuthError) {
      switch (err.type) {
        case "CredentialsSignin":
        case "CallbackRouteError":
          return {
            success: false,
            error: "Invalid creadiental",
            statusCode: 401,
          };
        default:
          return {
            success: false,
            error: "Oops something went error",
            statusCode: 500,
          };
      }
    }
    console.log(err);

    return { success: false, error: "Interserver errror", statusCode: 500 };
  }
}
