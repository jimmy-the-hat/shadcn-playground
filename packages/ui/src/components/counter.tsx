"use client"

import * as React from "react"
import { Minus, Plus } from "lucide-react"

import { cn } from "@workspace/ui/lib/utils"
import { Button } from "@workspace/ui/components/button"

interface CounterProps {
  defaultValue?: number
  value?: number
  onChange?: (value: number) => void
  min?: number
  max?: number
  className?: string
}

function Counter({
  defaultValue = 0,
  value: controlledValue,
  onChange,
  min,
  max,
  className,
}: CounterProps) {
  const [internalValue, setInternalValue] = React.useState(defaultValue)

  const isControlled = controlledValue !== undefined
  const value = isControlled ? controlledValue : internalValue

  function adjust(delta: number) {
    const next = Math.round((value + delta) * 10) / 10
    if (min !== undefined && next < min) return
    if (max !== undefined && next > max) return
    if (!isControlled) setInternalValue(next)
    onChange?.(next)
  }

  const canDecrement1 = min === undefined || value - 1 >= min
  const canDecrement01 = min === undefined || value - 0.1 >= min
  const canIncrement01 = max === undefined || value + 0.1 <= max
  const canIncrement1 = max === undefined || value + 1 <= max

  return (
    <div
      data-slot="counter"
      className={cn("inline-flex items-center gap-1", className)}
    >
      <Button
        variant="outline"
        size="icon-sm"
        onClick={() => adjust(-1)}
        disabled={!canDecrement1}
        aria-label="Decrease by 1"
      >
        <Minus />
      </Button>
      <Button
        variant="ghost"
        size="icon-sm"
        onClick={() => adjust(-0.1)}
        disabled={!canDecrement01}
        aria-label="Decrease by 0.1"
        className="text-muted-foreground text-xs"
      >
        .1
      </Button>

      <div
        className="mx-2 min-w-16 text-center font-mono text-2xl font-semibold tabular-nums"
        aria-live="polite"
        aria-label={`Value: ${value.toFixed(1)}`}
      >
        {value.toFixed(1)}
      </div>

      <Button
        variant="ghost"
        size="icon-sm"
        onClick={() => adjust(0.1)}
        disabled={!canIncrement01}
        aria-label="Increase by 0.1"
        className="text-muted-foreground text-xs"
      >
        .1
      </Button>
      <Button
        variant="outline"
        size="icon-sm"
        onClick={() => adjust(1)}
        disabled={!canIncrement1}
        aria-label="Increase by 1"
      >
        <Plus />
      </Button>
    </div>
  )
}

export { Counter }
