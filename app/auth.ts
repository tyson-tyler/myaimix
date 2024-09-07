import z from "zod";
import { SignInvalidator } from "./validator/signInvalidator";
import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";
import { findUserEmail } from "./resources/user-queries";
import argon2 from "argon2";

const nextAuth = NextAuth({
  session: { strategy: "jwt" },
  secret: process.env.AUTH_SECRET,
  pages: { signIn: "/auth/signin" },
  providers: [
    Credentials({
      async authorize(credentials) {
        const parsedCredients = SignInvalidator.safeParse(credentials);

        if (parsedCredients.success) {
          const { email, password } = parsedCredients.data;

          const user = await findUserEmail(email);

          if (!user) return null;
          if (!user.password) return null;

          const passwordsMatch = await argon2.verify(user.password, password);

          if (passwordsMatch) {
            const { password: _, ...userWithoutPassword } = user;
            return userWithoutPassword;
          }
        }
        return null;
      },
    }),
  ],
});
export const { signIn } = nextAuth;
