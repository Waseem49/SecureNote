import Image from "next/image";
import styles from "./page.module.css";
import Note from "./components/note/page";

export default function Home() {
  return (
    <main className={styles.main}>
      <Note />
    </main>
  );
}
