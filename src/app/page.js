import Image from "next/image";
import styles from "./page.module.css";
import Note from "./components/note/page";
import Navbar from "./components/navbar/page";
import Footer from "./components/footer/page";

export default function Home() {
  return (
    <main className={styles.main}>
      <Navbar />
      <Note />
      <Footer />
    </main>
  );
}
