import Feed from "components/Feed";
import Story from "components/Story";
import styles from "./page.module.css";
import ModalProvider from "../context/ModalContext/Provider";

export default function Page(): JSX.Element {
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
