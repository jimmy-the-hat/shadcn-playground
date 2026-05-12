import { PlusIcon } from "lucide-react"

import { Button } from "@workspace/ui/components/button"
import { Card, CardContent } from "@workspace/ui/components/card"
import {
  Empty,
  EmptyContent,
  EmptyDescription,
  EmptyHeader,
  EmptyMedia,
  EmptyTitle,
} from "@workspace/ui/components/empty"

import { SourceLink } from "@/components/source-link"

export function EmptyDistributeTrack() {
  return (
    <div className="flex flex-col gap-2">
      <Card>
        <CardContent>
          <Empty className="p-4">
            <EmptyMedia variant="icon">
              <PlusIcon />
            </EmptyMedia>
            <EmptyHeader>
              <EmptyTitle>Distribute Track</EmptyTitle>
              <EmptyDescription>
                Upload your first master to start reaching listeners on Spotify,
                Apple Music, and more.
              </EmptyDescription>
            </EmptyHeader>
            <EmptyContent>
              <Button>Create Release</Button>
            </EmptyContent>
          </Empty>
        </CardContent>
      </Card>
      <SourceLink path="apps/web/components/cards-02/empty-distribute-track.tsx" />
    </div>
  )
}
