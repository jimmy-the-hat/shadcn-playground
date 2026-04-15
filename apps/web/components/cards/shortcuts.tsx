import * as React from "react"

import { Card, CardContent } from "@workspace/ui/components/card"
import {
  Item,
  ItemActions,
  ItemGroup,
  ItemHeader,
  ItemSeparator,
  ItemTitle,
} from "@workspace/ui/components/item"
import { Kbd } from "@workspace/ui/components/kbd"

const shortcuts = [
  { label: "Search", keys: ["\u2318", "K"] },
  { label: "Quick Actions", keys: ["\u2318", "J"] },
  { label: "New File", keys: ["\u2318", "N"] },
  { label: "Save", keys: ["\u2318", "S"] },
  { label: "Toggle Sidebar", keys: ["\u2318", "B"] },
] as const

export function Shortcuts() {
  return (
    <Card>
      <CardContent>
        <div className="flex flex-col gap-3">
          <div className="text-sm font-medium">Shortcuts</div>
          <ItemGroup className="gap-2 text-muted-foreground" data-size="xs">
            {shortcuts.map(({ label, keys }, i) => (
              <React.Fragment key={label}>
                {i > 0 && <ItemSeparator />}
                <Item
                  variant="default"
                  size="xs"
                  className="border-0 px-0 py-0"
                >
                  <ItemHeader>
                    <ItemTitle className="font-normal">{label}</ItemTitle>
                    <ItemActions>
                      <div className="flex gap-1">
                        {keys.map((key) => (
                          <Kbd key={key}>{key}</Kbd>
                        ))}
                      </div>
                    </ItemActions>
                  </ItemHeader>
                </Item>
              </React.Fragment>
            ))}
          </ItemGroup>
        </div>
      </CardContent>
    </Card>
  )
}
