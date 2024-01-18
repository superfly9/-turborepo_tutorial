import { getCurrentUser } from "@/util/session";
import Link from "next/link";

export default async function SignInPage() {
  const user = await getCurrentUser();
  return (
    <>
      Signed in as {user?.email} <br />
      <Link href="/">Home</Link>
    </>
  );
}
