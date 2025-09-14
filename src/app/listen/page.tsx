import { Metadata } from "next"
import styles from "./listen.module.css"
import { songMetadata } from "./songMetadata"
import SongLinkBox from "@/components/song_link_box/SongLinkBox"

export const metadata: Metadata = {
  title: "Listen | Nate Waite",
  description: "Home page for Nate Waite",
}

export default function Listen() {
  return (
    <div className={styles.main}>
      <div className={styles.songList}>
        {songMetadata.map((meta) => (
          <SongLinkBox key={meta.songTitle} songTitle={meta.songTitle} subTitle={meta.subTitle} srcFile={meta.srcFile} linkRef={meta.linkRef} width={meta.width} height={meta.height} />
        ))}
      </div>
    </div>
  )
}