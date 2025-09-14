"use client"

import Link from "next/link"
import styles from "./header.module.css"
import Image from "next/image"
import { usePathname } from "next/navigation"
export default function Header() {
  const pathname = usePathname()
  const isHome = pathname === "/"
  return (
    <header className={styles.header}>
      <nav className={styles.leftNav}>
        <Link href="/listen" className={`${styles.link} ${pathname === "/listen" && styles.active}`}>listen</Link>
        <Link href="/watch" className={`${styles.link} ${pathname === "/watch" && styles.active}`}>watch</Link>
        <Link href="/shows" className={`${styles.link} ${pathname === "/shows" && styles.active}`}>shows</Link>
        <Link href="/about" className={`${styles.link} ${pathname === "/about" && styles.active}`}>about</Link>
      </nav>
      {!isHome && (
        <Link className={styles.flower} href={"/"}>
          <Image src="/flower_logo_black.svg" alt="flower" width={200} height={150} />
        </Link>
      )}
      <div className={styles.rightNav}>
        <Link className={styles.socialLink} passHref href="https://open.spotify.com/artist/57MyPA2CqgcigML6JnIixn?si=DiuUjiZtRwq8PWTBPQGCHQ" target="_blank">
          <Image src="/spotify.svg" alt="spotify" width={30} height={30} />
        </Link>
        <Link className={styles.socialLink} passHref href="https://music.apple.com/us/artist/nate-waite/1471148574" target="_blank">
          <Image src="/applemusic.svg" alt="Apple Music" width={30} height={30} />
        </Link>
        <Link className={styles.socialLink} passHref href="https://www.youtube.com/channel/UCq3wQFwdBIa_xCFHQvS8G2A/featured" target="_blank">
          <Image src="/youtube.svg" alt="YouTube" width={30} height={30} />
        </Link>
        <Link className={styles.socialLink} passHref href="https://www.instagram.com/natew8/" target="_blank">
          <Image src="/instagram.svg" alt="Instagram" width={30} height={30} />
        </Link>
        <Link className={styles.socialLink} passHref href="https://www.linkedin.com/in/natew8/" target="_blank">
          <Image src="/linkedin.svg" alt="LinkedIn" width={30} height={30} />
        </Link>
      </div>
    </header>
  )
}