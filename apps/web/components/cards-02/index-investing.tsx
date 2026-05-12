import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@workspace/ui/components/card"

import { SourceLink } from "@/components/source-link"

export function IndexInvesting() {
  return (
    <div className="flex flex-col gap-2">
      <Card>
        <CardHeader>
          <CardTitle>Dollar-Cost Averaging</CardTitle>
          <CardDescription>
            A strategy for building wealth over time.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <CardDescription className="mt-3 text-sm leading-relaxed">
            <a
              href="#"
              className="underline underline-offset-4 hover:text-primary"
            >
              Over time
            </a>
            , this smooths out the average cost of your investments. When prices
            drop, your fixed amount buys more shares. When prices rise, you buy
            fewer. The result is a lower average cost per share compared to
            lump-sum investing during volatile periods.
          </CardDescription>
        </CardContent>
      </Card>
      <SourceLink path="apps/web/components/cards-02/index-investing.tsx" />
    </div>
  )
}
