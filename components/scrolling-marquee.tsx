export default function ScrollingMarquee({
  text,
  separator = "///",
  speed = "normal",
  className = "",
  textClassName = "",
}: {
  text: string
  separator?: string
  speed?: "normal" | "slow"
  className?: string
  textClassName?: string
}) {
  const items = Array(20).fill(`${separator}${text}`)
  const animClass = speed === "slow" ? "animate-marquee-slow" : "animate-marquee"

  return (
    <div className={`overflow-hidden whitespace-nowrap ${className}`}>
      <div className={`inline-flex ${animClass}`}>
        {items.map((item, i) => (
          <span
            key={i}
            className={`text-xs md:text-sm font-mono tracking-widest uppercase mx-4 ${textClassName}`}
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  )
}
