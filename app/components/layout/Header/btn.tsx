"use server";
import { auth } from "@/app/auth";
import Button from "../ui/Button"; // Import the Button component here

export default async function ButtonBlur() {
  const user = await auth(); // Fetch user on the server side

  return (
    <div>
      <Button label="Login" user={user} />
    </div>
  );
}
