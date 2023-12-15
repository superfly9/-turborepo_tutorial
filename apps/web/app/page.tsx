import Feed from "./components/Feed";
import styles from "./page.module.css";

export default function Page(): JSX.Element {
  return (
    <main
      className={styles.main}
      style={{ display: "flex", flexDirection: "column" }}
    >
      <Feed />
    </main>
  );
}
