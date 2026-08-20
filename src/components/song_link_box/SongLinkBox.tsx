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
    <div className="border border-borders rounded flex justify-between items-center p-3 w-3/5 mb-3">
      <Image src={srcFile} alt={songTitle} width={width} height={height} />
      <div className="w-full h-[150px] flex flex-col items-center justify-evenly">
        <div className="flex flex-col items-center">
          <h1 className="font-bold text-[40px]">{songTitle}</h1>
          {subTitle && <h2 className="font-bold">{subTitle}</h2>}
        </div>
        <Link className="py-2 px-3 text-lg bg-foreground text-background rounded" target="_blank" href={linkRef}>listen now</Link>
      </div>
    </div>
  )
}
