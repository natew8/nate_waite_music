type VideoBoxProps = {
  url: string
  videoTitle: string
}
export default function VideoBox({ url, videoTitle }: VideoBoxProps) {
  return (
    <div className="flex flex-col bg-foreground w-[600px]">
      <iframe height="315" src={url} title={videoTitle} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
      <div className="text-background p-3">
        <h2 className="font-bold">{videoTitle}</h2>
      </div>
    </div>
  )
}
