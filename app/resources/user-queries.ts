import db from "../drizzle";
import { lower, users } from "../drizzle/schema";
import { eq } from "drizzle-orm";

export const findUserEmail = async (email: string) => {
  const user = await db
    .select({
      email: users.email,
      name: users.name,
      id: users.id,
    })
    .from(users)
    .where(eq(lower(users.email), email.toLowerCase()))
    .then((res) => res[0] ?? null);

  return user;
};
