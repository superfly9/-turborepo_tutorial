import Feed from "components/Feed";
import Story from "components/Story";
import styles from "./page.module.css";
import ModalProvider from "../context/ModalContext/Provider";
import { redirect } from "next/navigation";
import { getServerSession } from "next-auth";
import { authOptions } from "app/api/auth/[...nextauth]/options";

export default async function HomePage() {
  const session = await getServerSession(authOptions);

  if (!session) {
    redirect("/api/auth/signin");
  }
  return (
    <main
      className={styles.main}
      style={{ display: "flex", flexDirection: "column" }}
    >
      <ModalProvider>
        <Story />
        <Feed />
      </ModalProvider>
    </main>
  );
}
