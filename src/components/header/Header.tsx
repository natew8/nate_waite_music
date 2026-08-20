"use client"

import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { useEffect, useState } from "react"

const linkBase = "relative py-1 text-xl font-bold after:content-[''] after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-full after:bg-foreground after:transition-transform after:duration-[400ms] after:ease-in-out hover:text-foreground hover:after:scale-x-100"

const socialLinks = [
  { href: "https://open.spotify.com/artist/57MyPA2CqgcigML6JnIixn?si=DiuUjiZtRwq8PWTBPQGCHQ", src: "/spotify.svg", alt: "spotify" },
  { href: "https://music.apple.com/us/artist/nate-waite/1471148574", src: "/applemusic.svg", alt: "Apple Music" },
  { href: "https://www.youtube.com/channel/UCq3wQFwdBIa_xCFHQvS8G2A/featured", src: "/youtube.svg", alt: "YouTube" },
  { href: "https://www.instagram.com/natew8/", src: "/instagram.svg", alt: "Instagram" },
  { href: "https://www.linkedin.com/in/natew8/", src: "/linkedin.svg", alt: "LinkedIn" },
]

export default function Header() {
  const pathname = usePathname()
  const isHome = pathname === "/"
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    setIsOpen(false)
  }, [pathname])

  const linkClass = (path: string) =>
    `${linkBase} ${pathname === path ? "text-foreground after:scale-x-100" : "after:scale-x-0"}`

  const navLinks = (
    <>
      <Link href="/listen" className={linkClass("/listen")}>listen</Link>
      <Link href="/watch" className={linkClass("/watch")}>watch</Link>
      <Link href="/shows" className={linkClass("/shows")}>shows</Link>
      <Link href="/about" className={linkClass("/about")}>about</Link>
    </>
  )

  const socialIcons = (
    <>
      {socialLinks.map((s) => (
        <Link key={s.alt} className="group" passHref href={s.href} target="_blank">
          <Image className="group-hover:[filter:brightness(0)_saturate(100%)_invert(19%)_sepia(1%)_saturate(0%)_hue-rotate(314deg)_brightness(95%)_contrast(88%)]" src={s.src} alt={s.alt} width={30} height={30} />
        </Link>
      ))}
    </>
  )

  return (
    <header className="sticky top-0 z-20 bg-background w-full">
      <div className="flex items-center justify-between h-18 px-6 lg:px-8 xl:px-20">
        <nav className="hidden lg:flex w-[350px] justify-between" aria-label="Primary">
          {navLinks}
        </nav>

        <button
          type="button"
          className="lg:hidden flex flex-col justify-center gap-1.5 w-8 h-8"
          aria-label="Toggle menu"
          aria-expanded={isOpen}
          aria-controls="mobile-menu"
          onClick={() => setIsOpen((open) => !open)}
        >
          <span className={`block h-0.5 w-6 bg-foreground transition-transform ${isOpen ? "translate-y-2 rotate-45" : ""}`} />
          <span className={`block h-0.5 w-6 bg-foreground transition-opacity ${isOpen ? "opacity-0" : ""}`} />
          <span className={`block h-0.5 w-6 bg-foreground transition-transform ${isOpen ? "-translate-y-2 -rotate-45" : ""}`} />
        </button>

        {!isHome && (
          <Link className="mt-2.5" href={"/"}>
            <Image className="w-32 h-auto lg:w-[200px]" src="/flower_logo_black.svg" alt="flower" width={200} height={150} />
          </Link>
        )}

        <div className="hidden lg:flex w-[300px] justify-between">
          {socialIcons}
        </div>
      </div>

      {isOpen && (
        <>
          <div
            aria-hidden="true"
            onClick={() => setIsOpen(false)}
            className="lg:hidden fixed inset-x-0 bottom-0 top-18 z-10 bg-black/40"
          />
          <div id="mobile-menu" className="lg:hidden absolute top-full left-0 z-20 w-full bg-background border-t border-borders shadow-lg flex flex-col items-center gap-6 pb-8 pt-6">
            <nav className="flex flex-col items-center gap-6" aria-label="Primary">
              {navLinks}
            </nav>
            <div className="flex gap-6">
              {socialIcons}
            </div>
          </div>
        </>
      )}
    </header>
  )
}
