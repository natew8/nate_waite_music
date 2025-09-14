import Image from "next/image"
import styles from "./about.module.css"
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About | Nate Waite",
  description: "About page for Nate Waite",
};

export default function Page() {
  return (
    <div className={styles.main}>
      <div className={styles.aboutMeContainer}>
        <Image src="/nateOnStairs.PNG" alt="Nate Waite" height={500} width={500} />
        <hr className={styles.divider} />
        <div className={styles.aboutMeText}>
          <p>
            Nate is an Ogden, Utah native singer, songwriter, producer, and guitar player. Growing up in a musical family had Nate involced in the arts from a young age. He was put in every community theatre, singing group, and circus his parents could find. Though they hoped that one would keep him forever, he always seemed to find his way home. Weird.
          </p>
        </div>
      </div>
    </div>
  )
}