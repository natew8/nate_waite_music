import Image from "next/image";
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
    <div className="max-[600px]:mx-auto">
      <main className="flex-1 flex flex-col p-8 max-[600px]:items-center">
        <div className="flex items-center justify-center">
          <h1 className={`${playFair.variable} font-bold text-[64px] tracking-[4px] [font-family:var(--font-playfair-display)]`}>NATE WAITE</h1>
        </div>
        <Image className="mx-auto" src="/home-photo.jpg" alt="me" width={600} height={600} blurDataURL="Data:..." placeholder="blur" />
        <div className="grid">
          <h1 className="mx-auto mb-2 text-[44px] tracking-[4px] font-bold [font-family:var(--font-playfair-display)]">One Day</h1>
          <Link className="rounded bg-foreground text-background font-black text-center mx-auto py-2 px-3 hover:bg-secondary" target="_blank" href="https://open.spotify.com/track/5KYUs4sU3AJSE3KSl6uZvE?si=3dadae16cb8a45ff">Listen Now</Link>
        </div>
      </main>
    </div>
  );
}
