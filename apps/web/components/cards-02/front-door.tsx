import { LockIcon } from "lucide-react"

import { Badge } from "@workspace/ui/components/badge"
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@workspace/ui/components/card"

import { SourceLink } from "@/components/source-link"

export function FrontDoor() {
  return (
    <div className="flex flex-col gap-2">
      <Card>
        <CardHeader>
          <CardTitle>Front Door</CardTitle>
          <CardDescription>Smart Lock Pro</CardDescription>
          <CardAction>
            <div className="flex items-center gap-1.5 text-sm text-muted-foreground">
              Locked
              <LockIcon className="size-4" />
            </div>
          </CardAction>
        </CardHeader>
        <CardContent>
          <div className="relative flex aspect-video items-center justify-center overflow-hidden rounded-lg bg-muted bg-[repeating-linear-gradient(45deg,transparent,transparent_10px,var(--border)_10px,var(--border)_11px)]">
            <Badge variant="destructive" className="absolute top-2 right-2">
              Live
            </Badge>
          </div>
        </CardContent>
      </Card>
      <SourceLink path="apps/web/components/cards-02/front-door.tsx" />
    </div>
  )
}
