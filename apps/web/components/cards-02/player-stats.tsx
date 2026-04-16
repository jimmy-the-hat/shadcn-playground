import * as React from "react"

import { Item } from "@workspace/ui/components/item"
import { Separator } from "@workspace/ui/components/separator"

type StatRow = {
  label: string
  value: number | string
}

interface PlayerStatsProps {
  leftStats: StatRow[]
  rightStats: StatRow[]
}

function StatColumn({ rows }: { rows: StatRow[] }) {
  return (
    <div className="flex flex-1 flex-col gap-3.5">
      {rows.map((row) => (
        <div key={row.label} className="flex items-center justify-between gap-3">
          <span className="text-muted-foreground">{row.label}</span>
          <span className="font-semibold tabular-nums">{row.value}</span>
        </div>
      ))}
    </div>
  )
}

export function PlayerStats({ leftStats, rightStats }: PlayerStatsProps) {
  return (
    <Item variant="outline" className="items-stretch">
      <StatColumn rows={leftStats} />
      <Separator orientation="vertical" />
      <StatColumn rows={rightStats} />
    </Item>
  )
}

export function PlayerStatsDefault() {
  return (
    <PlayerStats
      leftStats={[
        { label: "XI", value: 21 },
        { label: "Subs", value: 7 },
        { label: "Goals", value: 5 },
        { label: "Assists", value: 18 },
      ]}
      rightStats={[
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
      leftStats={[
        { label: "XI", value: 27 },
        { label: "Subs", value: 0 },
        { label: "Goals", value: 0 },
        { label: "Assists", value: 0 },
        { label: "Saves", value: 61 },
        { label: "Saved pen", value: 0 },
      ]}
      rightStats={[
        { label: "Yellow cards", value: 1 },
        { label: "Red cards", value: 0 },
        { label: "Conceded", value: 31 },
        { label: "Clean sheet", value: 9 },
      ]}
    />
  )
}

export function PlayerStatsVariant2() {
  return (
    <PlayerStats
      leftStats={[
        { label: "XI", value: 17 },
        { label: "Subs", value: 18 },
        { label: "Goals", value: 5 },
        { label: "Assists", value: 5 },
      ]}
      rightStats={[
        { label: "Yellow cards", value: 3 },
        { label: "Red cards", value: 0 },
      ]}
    />
  )
}
