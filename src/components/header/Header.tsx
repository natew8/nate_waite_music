"use client"

import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"

const linkBase = "relative py-1 text-xl font-bold after:content-[''] after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-full after:bg-foreground after:transition-transform after:duration-[400ms] after:ease-in-out hover:text-foreground hover:after:scale-x-100"

export default function Header() {
  const pathname = usePathname()
  const isHome = pathname === "/"

  const linkClass = (path: string) =>
    `${linkBase} ${pathname === path ? "text-foreground after:scale-x-100" : "after:scale-x-0"}`

  return (
    <header className="sticky z-10 bg-background items-center justify-between flex h-18 w-full px-20">
      <nav className="w-[350px] flex justify-between">
        <Link href="/listen" className={linkClass("/listen")}>listen</Link>
        <Link href="/watch" className={linkClass("/watch")}>watch</Link>
        <Link href="/shows" className={linkClass("/shows")}>shows</Link>
        <Link href="/about" className={linkClass("/about")}>about</Link>
      </nav>
      {!isHome && (
        <Link className="mt-2.5" href={"/"}>
          <Image src="/flower_logo_black.svg" alt="flower" width={200} height={150} />
        </Link>
      )}
      <div className="w-[300px] flex justify-between">
        <Link className="group" passHref href="https://open.spotify.com/artist/57MyPA2CqgcigML6JnIixn?si=DiuUjiZtRwq8PWTBPQGCHQ" target="_blank">
          <Image className="group-hover:[filter:brightness(0)_saturate(100%)_invert(19%)_sepia(1%)_saturate(0%)_hue-rotate(314deg)_brightness(95%)_contrast(88%)]" src="/spotify.svg" alt="spotify" width={30} height={30} />
        </Link>
        <Link className="group" passHref href="https://music.apple.com/us/artist/nate-waite/1471148574" target="_blank">
          <Image className="group-hover:[filter:brightness(0)_saturate(100%)_invert(19%)_sepia(1%)_saturate(0%)_hue-rotate(314deg)_brightness(95%)_contrast(88%)]" src="/applemusic.svg" alt="Apple Music" width={30} height={30} />
        </Link>
        <Link className="group" passHref href="https://www.youtube.com/channel/UCq3wQFwdBIa_xCFHQvS8G2A/featured" target="_blank">
          <Image className="group-hover:[filter:brightness(0)_saturate(100%)_invert(19%)_sepia(1%)_saturate(0%)_hue-rotate(314deg)_brightness(95%)_contrast(88%)]" src="/youtube.svg" alt="YouTube" width={30} height={30} />
        </Link>
        <Link className="group" passHref href="https://www.instagram.com/natew8/" target="_blank">
          <Image className="group-hover:[filter:brightness(0)_saturate(100%)_invert(19%)_sepia(1%)_saturate(0%)_hue-rotate(314deg)_brightness(95%)_contrast(88%)]" src="/instagram.svg" alt="Instagram" width={30} height={30} />
        </Link>
        <Link className="group" passHref href="https://www.linkedin.com/in/natew8/" target="_blank">
          <Image className="group-hover:[filter:brightness(0)_saturate(100%)_invert(19%)_sepia(1%)_saturate(0%)_hue-rotate(314deg)_brightness(95%)_contrast(88%)]" src="/linkedin.svg" alt="LinkedIn" width={30} height={30} />
        </Link>
      </div>
    </header>
  )
}
