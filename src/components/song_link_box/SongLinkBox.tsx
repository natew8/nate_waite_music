import Image from "next/image";
import Link from "next/link";

type SongLinkBoxProps = {
  srcFile: string,
  songTitle: string,
  subTitle: string | undefined,
  linkRef: string,
  height: number | undefined,
  width: number | undefined,
}

export default function SongLinkBox({
  srcFile,
  songTitle,
  linkRef,
  subTitle,
  width = 325,
  height = 225
}: SongLinkBoxProps) {
  return (
    <div className="border border-borders rounded flex flex-col min-[1200px]:flex-row justify-between items-center gap-3 min-[1200px]:gap-0 p-3 w-full min-[1200px]:w-3/5 mb-3">
      <Image src={srcFile} alt={songTitle} width={width} height={height} className="max-[1199px]:w-full max-[1199px]:h-auto" />
      <div className="w-full min-w-0 h-auto min-[1200px]:h-[150px] flex flex-col items-center justify-evenly gap-2 min-[1200px]:gap-0 py-2 min-[1200px]:py-0">
        <div className="flex flex-col items-center text-center">
          <h1 className="font-bold text-2xl min-[1200px]:text-[40px]">{songTitle}</h1>
          {subTitle && <h2 className="font-bold text-base mb-2">{subTitle}</h2>}
        </div>
        <Link className="py-2 px-3 text-lg bg-foreground text-background rounded" target="_blank" href={linkRef}>listen now</Link>
      </div>
    </div>
  )
}
