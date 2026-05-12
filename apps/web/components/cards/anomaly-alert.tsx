"use client"

import { Button } from "@workspace/ui/components/button"
import { Card, CardContent } from "@workspace/ui/components/card"
import {
  Empty,
  EmptyContent,
  EmptyDescription,
  EmptyHeader,
  EmptyTitle,
} from "@workspace/ui/components/empty"

import { SourceLink } from "@/components/source-link"

export function AnomalyAlert() {
  return (
    <div className="flex flex-col gap-2">
      <Card>
        <CardContent>
          <Empty className="h-48">
            <EmptyHeader>
              <EmptyTitle>Get alerted for anomalies</EmptyTitle>
              <EmptyDescription>
                Automatically monitor your projects for anomalies and get
                notified.
              </EmptyDescription>
            </EmptyHeader>
            <EmptyContent>
              <Button>Upgrade to Observability Plus</Button>
            </EmptyContent>
          </Empty>
        </CardContent>
      </Card>
      <SourceLink path="apps/web/components/cards/anomaly-alert.tsx" />
    </div>
  )
}
