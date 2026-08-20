import { videoLinks } from "./videoLinks"
import VideoBox from "@/components/video_box/VideoBox"
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Watch | Nate Waite",
  description: "Watch page for Nate Waite",
};

export default function Page() {
  return (
    <div className="flex-1 flex flex-col items-center">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 p-6 w-full">
        {videoLinks.map((vid) => (
          <VideoBox key={vid.videoTitle} url={vid.url} videoTitle={vid.videoTitle} />
        ))}
      </div>
    </div>
  )
}
