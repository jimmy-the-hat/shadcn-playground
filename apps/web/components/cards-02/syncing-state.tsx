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
import { Spinner } from "@workspace/ui/components/spinner"

import { SourceLink } from "@/components/source-link"

export function SyncingState() {
  return (
    <div className="flex flex-col gap-2">
      <Card>
        <CardContent className="p-0">
          <Empty className="p-4">
            <EmptyHeader>
              <EmptyMedia variant="icon">
                <Spinner />
              </EmptyMedia>
              <EmptyTitle>Syncing your accounts</EmptyTitle>
              <EmptyDescription>
                We&apos;re pulling in your latest transactions. This usually
                takes a few seconds.
              </EmptyDescription>
            </EmptyHeader>
            <EmptyContent>
              <Button variant="outline">Cancel</Button>
            </EmptyContent>
          </Empty>
        </CardContent>
      </Card>
      <SourceLink path="apps/web/components/cards-02/syncing-state.tsx" />
    </div>
  )
}
