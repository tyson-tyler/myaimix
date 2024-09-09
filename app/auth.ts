import z from "zod";
import { SignInvalidator } from "./validator/signInvalidator";
import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";
import Google from "next-auth/providers/google";
import github from "next-auth/providers/github";
import { findUserEmail } from "./resources/user-queries";
import argon2 from "argon2";
import { DrizzleAdapter } from "@auth/drizzle-adapter";

import db from "./drizzle";
import * as schema from "../app/drizzle/schema";

const nextAuth = NextAuth({
  adapter: DrizzleAdapter(db, {
    accountsTable: schema.accounts,
    usersTable: schema.users,
    authenticatorsTable: schema.authenticators,
    sessionsTable: schema.sessions,
    verificationTokensTable: schema.verificationTokens,
  }),
  session: { strategy: "jwt" },
  secret: process.env.AUTH_SECRET,
  pages: { signIn: "/auth/signin" },

  callbacks: {
    jwt({ token, user }) {
      if (user?.id) token.id = user.id;
      console.log("user", user);
      console.log("token", token);
      return token;
    },

    session({ session, token }) {
      console.log("session", session);
      console.log("token in jwt", token);

      session.user.id = token.id;

      return session;
    },
  },
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
    Google({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
    github({
      clientId: process.env.GITHUB_CLIENT_ID,
      clientSecret: process.env.GITHUB_CLIENT_SECRET,
    }),
  ],
});
export const { signIn, auth, handlers } = nextAuth;
