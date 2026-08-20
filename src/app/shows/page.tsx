import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Shows | Nate Waite",
  description: "Shows page for Nate Waite",
};

export default function Shows() {
  return (
    <div className="flex-1 flex flex-col items-center justify-center h-screen">
      <h1 className="text-[40px] font-bold mx-auto text-foreground text-center">Upcoming shows will be announced here</h1>
      <h2 className="text-[30px] font-bold mx-auto text-foreground text-center">Stay tuned for updates!</h2>
    </div>
  )
}
