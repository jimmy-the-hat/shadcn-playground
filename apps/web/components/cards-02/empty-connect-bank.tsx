import { CreditCardIcon } from "lucide-react"

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

export function EmptyConnectBank() {
  return (
    <div className="flex flex-col gap-2">
      <Card>
        <CardContent>
          <Empty className="p-4">
            <EmptyMedia variant="icon">
              <CreditCardIcon />
            </EmptyMedia>
            <EmptyHeader>
              <EmptyTitle>Connect Bank</EmptyTitle>
              <EmptyDescription>
                Link your payout method to receive monthly royalty distributions
                automatically.
              </EmptyDescription>
            </EmptyHeader>
            <EmptyContent>
              <Button>Set Up Payouts</Button>
            </EmptyContent>
          </Empty>
        </CardContent>
      </Card>
      <SourceLink path="apps/web/components/cards-02/empty-connect-bank.tsx" />
    </div>
  )
}
