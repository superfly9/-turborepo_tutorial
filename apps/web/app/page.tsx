import Feed from "app/components/Feed";
import Story from "app/components/Story";
import styles from "app/page.module.css";

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
