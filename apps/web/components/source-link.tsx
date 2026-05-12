import { ArrowUpRight } from "lucide-react"

export function SourceLink({ path }: { path: string }) {
  return (
    <a
      href={`https://github.com/jimmy-the-hat/shadcn-playground/blob/main/${path}`}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center gap-1 self-start px-1 text-xs text-muted-foreground/60 transition-colors hover:text-muted-foreground"
    >
      View source
      <ArrowUpRight className="size-3" />
    </a>
  )
}
