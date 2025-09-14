import Image from "next/image";
import styles from "./page.module.css";
import { Playfair_Display } from "next/font/google";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home | Nate Waite",
  description: "Home page for Nate Waite",
};

const playFair = Playfair_Display({
  variable: "--font-playfair-display",
  subsets: ["latin"],
  weight: ['400', '500', '600', '700', '800', '900']
})

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <div className={styles.nameContainer}>
          <h1 className={`${playFair.variable} ${styles.name}`}>NATE WAITE</h1>
        </div>
        <Image className={styles.image} src="/home-photo.jpg" alt="me" width={600} height={600} blurDataURL="Data:..." placeholder="blur" />
        <div className={styles.actionContainer}>
          <h1 className={styles.actionLabel}>One Day</h1>
          <Link className={styles.actionButton} target="_blank" href="https://open.spotify.com/track/5KYUs4sU3AJSE3KSl6uZvE?si=3dadae16cb8a45ff">Listen Now</Link>
        </div>
      </main>
    </div >
  );
}
