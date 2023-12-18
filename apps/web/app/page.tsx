import Feed from "./components/Feed";
import Story from "./components/Story";
import styles from "./page.module.css";

export default function Page(): JSX.Element {
  return (
    <main
      className={styles.main}
      style={{ display: "flex", flexDirection: "column" }}
    >
      <Story />
      <Feed />
    </main>
  );
}
