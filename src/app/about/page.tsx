import Image from "next/image"
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About | Nate Waite",
  description: "About page for Nate Waite",
};

export default function Page() {
  return (
    <div className="flex-1 flex flex-col justify-center items-center py-12 px-6">
      <div className="flex flex-col md:flex-row w-full md:w-3/5">
        <Image src="/nateOnStairs.jpg" alt="Nate Waite" height={500} width={500} className="max-md:w-full max-md:h-auto self-start" />
        <hr className="border border-borders my-6 md:my-0 md:mx-3 md:h-auto" />
        <div className="font-medium text-xl [font-family:'Gill_Sans','Gill_Sans_MT',Calibri,'Trebuchet_MS',sans-serif]">
          <p>
            Nate is an Ogden, Utah native singer, songwriter, producer, and guitar player. Growing up in a musical family had Nate involced in the arts from a young age. He was put in every community theatre, singing group, and circus his parents could find. Though they hoped that one would keep him forever, he always seemed to find his way home. Weird.
          </p>
        </div>
      </div>
    </div>
  )
}
