"use server";

import { signOut } from "next-auth/react";

export async function signOutUserAction() {
  try {
    await signOut({ redirect: false });
  } catch (error) {
    console.log(error);
  }
}
