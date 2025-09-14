import styles from "./watch.module.css"
import { videoLinks } from "./videoLinks"
import VideoBox from "@/components/video_box/VideoBox"
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Watch | Nate Waite",
  description: "Watch page for Nate Waite",
};

export default function Page() {
  return (
    <div className={styles.main}>
      <div className={styles.watchList}>
        {videoLinks.map((vid) => (
          <VideoBox key={vid.videoTitle} url={vid.url} videoTitle={vid.videoTitle} />
        ))}
      </div>
    </div>
  )
}