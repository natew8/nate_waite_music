import styles from "./videoBox.module.css"

type VideoBoxProps = {
  url: string
  videoTitle: string
}
export default function VideoBox({ url, videoTitle }: VideoBoxProps) {
  return (
    <div className={styles.videoBox}>
      <iframe height="315" src={url} title={videoTitle} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
      <div className={styles.titleBox}>
        <h2>{videoTitle}</h2>
      </div>
    </div>
  )
}