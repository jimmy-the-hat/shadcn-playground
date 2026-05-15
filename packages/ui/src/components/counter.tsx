"use client"

import * as React from "react"

import { cn } from "@workspace/ui/lib/utils"
import { Button } from "@workspace/ui/components/button"

interface CounterProps {
  defaultValue?: number
  value?: number
  onChange?: (value: number) => void
  min?: number
  max?: number
  label?: string
  responsive?: boolean
  className?: string
}

function Counter({
  defaultValue = 0,
  value: controlledValue,
  onChange,
  min,
  max,
  label,
  responsive = false,
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

  if (responsive) {
    const bigBtn = {
      width: "clamp(2rem, 13cqi, 3.75rem)",
      height: "clamp(2rem, 13cqi, 3.75rem)",
      fontSize: "clamp(0.55rem, 2.6cqi, 0.9rem)",
    } as React.CSSProperties
    const smallBtn = {
      width: "clamp(1.75rem, 11cqi, 3rem)",
      height: "clamp(1.75rem, 11cqi, 3rem)",
      fontSize: "clamp(0.5rem, 2.2cqi, 0.8rem)",
    } as React.CSSProperties
    const valueStyle = {
      fontSize: "clamp(1.25rem, 13cqi, 4rem)",
      minWidth: "clamp(2.5rem, 18cqi, 7rem)",
    } as React.CSSProperties

    return (
      <div
        data-slot="counter"
        className={cn("@container flex w-full flex-col items-center gap-2", className)}
      >
        {label && (
          <span className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
            {label}
          </span>
        )}
        <div className="flex w-full items-center justify-between gap-[clamp(0.25rem,1.5cqi,0.75rem)]">
          <Button
            variant="outline"
            onClick={() => adjust(-1)}
            disabled={!canDecrement1}
            aria-label="Decrease by 1"
            className="shrink-0 rounded-full p-0 font-normal"
            style={bigBtn}
          >
            −1.0
          </Button>
          <Button
            variant="outline"
            onClick={() => adjust(-0.1)}
            disabled={!canDecrement01}
            aria-label="Decrease by 0.1"
            className="shrink-0 rounded-full p-0 font-normal"
            style={smallBtn}
          >
            −0.1
          </Button>

          <div
            className="flex-1 text-center font-sans font-bold tabular-nums leading-none"
            aria-live="polite"
            aria-label={`Value: ${value.toFixed(1)}`}
            style={valueStyle}
          >
            {value.toFixed(1)}
          </div>

          <Button
            variant="outline"
            onClick={() => adjust(0.1)}
            disabled={!canIncrement01}
            aria-label="Increase by 0.1"
            className="shrink-0 rounded-full p-0 font-normal"
            style={smallBtn}
          >
            +0.1
          </Button>
          <Button
            variant="outline"
            onClick={() => adjust(1)}
            disabled={!canIncrement1}
            aria-label="Increase by 1"
            className="shrink-0 rounded-full p-0 font-normal"
            style={bigBtn}
          >
            +1.0
          </Button>
        </div>
      </div>
    )
  }

  return (
    <div
      data-slot="counter"
      className={cn("inline-flex flex-col items-center gap-2", className)}
    >
      {label && (
        <span className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
          {label}
        </span>
      )}
      <div className="inline-flex items-center gap-3">
        <div className="flex items-center gap-2">
          <Button
            variant="outline"
            size="icon-lg"
            onClick={() => adjust(-1)}
            disabled={!canDecrement1}
            aria-label="Decrease by 1"
            className="rounded-full text-xs font-normal"
          >
            −1.0
          </Button>
          <Button
            variant="outline"
            size="icon"
            onClick={() => adjust(-0.1)}
            disabled={!canDecrement01}
            aria-label="Decrease by 0.1"
            className="rounded-full text-xs font-normal"
          >
            −0.1
          </Button>
        </div>

        <div
          className="min-w-[5rem] text-center font-sans text-3xl font-bold tabular-nums"
          aria-live="polite"
          aria-label={`Value: ${value.toFixed(1)}`}
        >
          {value.toFixed(1)}
        </div>

        <div className="flex items-center gap-2">
          <Button
            variant="outline"
            size="icon"
            onClick={() => adjust(0.1)}
            disabled={!canIncrement01}
            aria-label="Increase by 0.1"
            className="rounded-full text-xs font-normal"
          >
            +0.1
          </Button>
          <Button
            variant="outline"
            size="icon-lg"
            onClick={() => adjust(1)}
            disabled={!canIncrement1}
            aria-label="Increase by 1"
            className="rounded-full text-xs font-normal"
          >
            +1.0
          </Button>
        </div>
      </div>
    </div>
  )
}

export { Counter }
