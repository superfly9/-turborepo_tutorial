import Feed from "component/Feed";
import Story from "component/Story";
import styles from "./page.module.css";
import ModalProvider from "./context/ModalContext/Provider";
import Header from "./components/Header";

export default function Page(): JSX.Element {
  return (
    <main
      className={styles.main}
      style={{ display: "flex", flexDirection: "column" }}
    >
      <ModalProvider>
        <Header />
        <Story />
        <Feed />
      </ModalProvider>
    </main>
  );
}
