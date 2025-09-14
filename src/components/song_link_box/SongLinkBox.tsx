import Image from "next/image";
import Link from "next/link";
import styles from "./songLinkBox.module.css"

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
    <div className={styles.songContainer}>
      <Image src={srcFile} alt={songTitle} width={width} height={height} />
      <div className={styles.rightSide}>
        <div className={styles.titleBox}>
          <h1 className={styles.songTitle}>{songTitle}</h1>
          {subTitle && <h2>{subTitle}</h2>}
        </div>
        <Link className={styles.songLink} target="_blank" href={linkRef}>listen now</Link>
      </div>
    </div>
  )
}