import * as React from "react"

import { Item } from "@workspace/ui/components/item"
import { Separator } from "@workspace/ui/components/separator"
import { cn } from "@workspace/ui/lib/utils"

const DANGER_LABELS = new Set([
  "Yellow cards",
  "Red cards",
  "Conceded",
  "Missed penalty",
  "Own goal",
])

type StatRow = {
  label: string
  value: number | string
}

function StatColumn({ rows }: { rows: StatRow[] }) {
  return (
    <div className="flex flex-1 flex-col gap-3.5">
      {rows.map((row) => (
        <div key={row.label} className="flex items-center justify-between gap-3">
          <span className="text-muted-foreground">{row.label}</span>
          <span
            className={cn(
              "font-semibold tabular-nums",
              DANGER_LABELS.has(row.label) && "text-[#b20000]"
            )}
          >
            {row.value}
          </span>
        </div>
      ))}
    </div>
  )
}

export function PlayerStats({ stats }: { stats: StatRow[] }) {
  const mid = Math.ceil(stats.length / 2)
  return (
    <Item variant="outline" className="items-stretch">
      <StatColumn rows={stats.slice(0, mid)} />
      <Separator orientation="vertical" />
      <StatColumn rows={stats.slice(mid)} />
    </Item>
  )
}

export function PlayerStatsDefault() {
  return (
    <PlayerStats
      stats={[
        { label: "XI", value: 21 },
        { label: "Subs", value: 7 },
        { label: "Goals", value: 5 },
        { label: "Assists", value: 18 },
        { label: "Yellow cards", value: 21 },
        { label: "Red cards", value: 7 },
        { label: "Conceded", value: 5 },
        { label: "Clean sheet", value: 18 },
      ]}
    />
  )
}

export function PlayerStatsVariant1() {
  return (
    <PlayerStats
      stats={[
        { label: "XI", value: 27 },
        { label: "Subs", value: 0 },
        { label: "Goals", value: 0 },
        { label: "Assists", value: 0 },
        { label: "Saves", value: 61 },
        { label: "Yellow cards", value: 1 },
        { label: "Red cards", value: 0 },
        { label: "Conceded", value: 31 },
        { label: "Clean sheet", value: 9 },
        { label: "Saved pen", value: 0 },
      ]}
    />
  )
}

export function PlayerStatsVariant2() {
  return (
    <PlayerStats
      stats={[
        { label: "XI", value: 17 },
        { label: "Subs", value: 18 },
        { label: "Goals", value: 5 },
        { label: "Assists", value: 5 },
        { label: "Yellow cards", value: 3 },
        { label: "Red cards", value: 0 },
      ]}
    />
  )
}
