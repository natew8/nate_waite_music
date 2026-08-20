import { Metadata } from "next"
import { songMetadata } from "./songMetadata"
import SongLinkBox from "@/components/song_link_box/SongLinkBox"

export const metadata: Metadata = {
  title: "Listen | Nate Waite",
  description: "Home page for Nate Waite",
}

export default function Listen() {
  return (
    <div className="flex-1 flex flex-col items-center">
      <div className="flex flex-col items-center w-full sm:w-4/5 p-6">
        {songMetadata.map((meta) => (
          <SongLinkBox key={meta.songTitle} songTitle={meta.songTitle} subTitle={meta.subTitle} srcFile={meta.srcFile} linkRef={meta.linkRef} width={meta.width} height={meta.height} />
        ))}
      </div>
    </div>
  )
}
