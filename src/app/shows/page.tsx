import { Metadata } from "next";
import styles from "./shows.module.css";

export const metadata: Metadata = {
  title: "Shows | Nate Waite",
  description: "Shows page for Nate Waite",
};

export default function Shows() {
  return (
    <div className={styles.main}>
      <h1 className={styles.showsTBATitle}>Upcoming shows will be announced here</h1>
      <h2 className={styles.showsTBASubtitle}>Stay tuned for updates!</h2>
    </div>
  )
}