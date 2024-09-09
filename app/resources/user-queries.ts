"use server";

import db from "../drizzle";
import { lower, users } from "../drizzle/schema";
import { eq } from "drizzle-orm";

export const findUserEmail = async (
  email: string
): Promise<typeof users.$inferSelect | null> => {
  const user = await db
    .select()
    .from(users)
    .where(eq(lower(users.email), email.toLowerCase()))
    .then((res) => res[0] ?? null);

  return user;
};
