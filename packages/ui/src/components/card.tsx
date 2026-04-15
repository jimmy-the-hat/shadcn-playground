import * as React from "react"

import { cn } from "@workspace/ui/lib/utils"

/**
 * Supported border-radius variants for the Card component.
 *
 * These map directly to the project's Tailwind `--radius-*` CSS custom
 * properties defined in globals.css, so they stay in sync with the theme.
 * The scale is intentionally a subset — only values that make visual sense
 * for a card surface are exposed.
 *
 * Common pairing for nested cards:
 *   outer = "4xl" (default), inner = "3xl" or "2xl"
 *
 * The ideal inner radius follows the formula:
 *   inner_radius = outer_radius − gap_between_cards
 * In practice, dropping one or two steps in the scale is close enough
 * and avoids hard-coding pixel math.
 */
type CardRounded = "4xl" | "3xl" | "2xl" | "xl" | "none"

/**
 * Maps each `rounded` prop value to the corresponding CSS custom property
 * from the theme. These values are set as `--card-radius` on the Card
 * element, allowing every child component (CardHeader, CardFooter, image
 * selectors) to inherit the radius via `var(--card-radius)` without
 * needing their own prop or class explosion.
 *
 * Why CSS variables instead of Tailwind data-attribute variants?
 * → A data-attribute approach (e.g. `group-data-[rounded=3xl]/card:rounded-t-3xl`)
 *   would require N variants × M child components of classes. With 5 sizes and
 *   4 consumers (Card, CardHeader, CardFooter, images), that's 20 class strings
 *   that all need to stay in sync. A single CSS variable eliminates that entirely.
 */
const cardRadiusMap: Record<CardRounded, string> = {
  "4xl": "var(--radius-4xl)",
  "3xl": "var(--radius-3xl)",
  "2xl": "var(--radius-2xl)",
  xl: "var(--radius-xl)",
  none: "0px",
}

function Card({
  className,
  size = "default",
  flush = false,
  rounded = "4xl",
  style,
  ...props
}: React.ComponentProps<"div"> & {
  size?: "default" | "sm"
  flush?: boolean
  /**
   * Controls the border-radius of the card and all its sub-components.
   *
   * Uses a CSS custom property (`--card-radius`) under the hood so child
   * components like CardHeader and CardFooter automatically inherit the
   * value — no extra props needed on children.
   *
   * @default "4xl"
   *
   * @example
   * // Standard card
   * <Card>…</Card>
   *
   * @example
   * // Nested card with reduced rounding to sit visually inside a parent
   * <Card flush>
   *   <Card rounded="3xl">…</Card>
   * </Card>
   */
  rounded?: CardRounded
}) {
  return (
    <div
      data-slot="card"
      data-size={size}
      /**
       * --card-radius is set here and inherited by CardHeader, CardFooter,
       * and the image child selectors below. This single point of truth
       * means changing the `rounded` prop on Card automatically updates
       * every child's border-radius.
       */
      style={
        { "--card-radius": cardRadiusMap[rounded], ...style } as React.CSSProperties
      }
      className={cn(
        /*
         * rounded-(--card-radius) — uses the CSS variable set above
         * instead of a static Tailwind class like `rounded-4xl`. This is
         * what enables the `rounded` prop to work without class duplication.
         *
         * The image selectors (*:[img:first-child], *:[img:last-child])
         * also reference --card-radius so full-bleed images match the
         * card's corners regardless of which variant is active.
         */
        "group/card flex flex-col overflow-hidden rounded-(--card-radius) bg-card text-sm text-card-foreground shadow-md ring-1 ring-foreground/5 has-[>img:first-child]:pt-0 dark:ring-foreground/10 *:[img:first-child]:rounded-t-[var(--card-radius)] *:[img:last-child]:rounded-b-[var(--card-radius)]",
        !flush && "gap-6 py-6 data-[size=sm]:gap-4 data-[size=sm]:py-4",
        className
      )}
      {...props}
    />
  )
}

function CardHeader({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-header"
      className={cn(
        /*
         * rounded-t-(--card-radius,2rem) — inherits the Card's
         * radius for its top corners. The fallback (2rem ≈ radius-4xl)
         * ensures sensible rounding if CardHeader is ever rendered
         * outside a Card context (e.g. in tests or Storybook).
         */
        "group/card-header @container/card-header grid auto-rows-min items-start gap-1.5 rounded-t-(--card-radius,2rem) px-6 group-data-[size=sm]/card:px-4 has-data-[slot=card-action]:grid-cols-[1fr_auto] has-data-[slot=card-description]:grid-rows-[auto_auto] [.border-b]:pb-6 group-data-[size=sm]/card:[.border-b]:pb-4",
        className
      )}
      {...props}
    />
  )
}

function CardTitle({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-title"
      className={cn("font-heading text-base font-medium", className)}
      {...props}
    />
  )
}

function CardDescription({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-description"
      className={cn("text-sm text-muted-foreground", className)}
      {...props}
    />
  )
}

function CardAction({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-action"
      className={cn(
        "col-start-2 row-span-2 row-start-1 self-start justify-self-end",
        className
      )}
      {...props}
    />
  )
}

function CardContent({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-content"
      className={cn("px-6 group-data-[size=sm]/card:px-4", className)}
      {...props}
    />
  )
}

function CardFooter({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-footer"
      className={cn(
        /*
         * Same pattern as CardHeader — inherits --card-radius for the
         * bottom corners with a 2rem fallback for standalone usage.
         */
        "flex items-center rounded-b-(--card-radius,2rem) px-6 group-data-[size=sm]/card:px-4 [.border-t]:pt-6 group-data-[size=sm]/card:[.border-t]:pt-4",
        className
      )}
      {...props}
    />
  )
}

export {
  Card,
  CardHeader,
  CardFooter,
  CardTitle,
  CardAction,
  CardDescription,
  CardContent,
}
