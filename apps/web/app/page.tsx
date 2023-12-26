import Feed from "component/Feed";
import Story from "component/Story";
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
// As of TypeScript 4.1, baseUrl is no longer required to be set when using paths.
