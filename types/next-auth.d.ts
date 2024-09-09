import type { JWT as DefaultJWT } from "next-auth/jwt";

import type { User as DefautlUser } from "next-auth";

declare module "next-auth" {
  interface User extends DefautlUser {}
}

declare module "next-auth/jwt" {
  interface JWT extends DefaultJWT {
    id: (typeof users.$inferSelect)["id"];
  }
}
