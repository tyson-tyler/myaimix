import { defineConfig } from "drizzle-kit";
import type { Config } from "drizzle-kit";

// Validate environment variable
const DATABASE_URL = process.env.DATABASE_URL;
if (!DATABASE_URL) {
  throw new Error("DATABASE_URL is not defined");
}

const drizzleConfig: Config = {
  schema: "./app/drizzle/schema.ts",
  out: "./migrations",
  dialect: "postgresql",
  dbCredentials: { url: DATABASE_URL },
};

export default defineConfig(drizzleConfig);
