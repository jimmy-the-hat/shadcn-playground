import * as React from "react"

import { cn } from "@workspace/ui/lib/utils"

/* -----------------------------------------------------------------------
 * RADIUS
 * -----------------------------------------------------------------------
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
 * ----------------------------------------------------------------------- */
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

/* -----------------------------------------------------------------------
 * PADDING (density)
 * -----------------------------------------------------------------------
 * Controls the internal spacing density of the entire card — vertical
 * padding (py) and gap on the Card itself, horizontal padding (px) on
 * child components (CardHeader, CardContent, CardFooter).
 *
 * Uses a CSS custom property (`--card-padding`) so that all card
 * sub-components automatically inherit the spacing from their parent
 * Card, exactly mirroring the pattern used for `--card-radius`.
 *
 * This is the primary mechanism for creating compact nested cards:
 *
 *   <Card flush>
 *     <Card rounded="3xl" padding="sm">
 *       <CardHeader>…</CardHeader>
 *       <CardContent>…</CardContent>
 *     </Card>
 *   </Card>
 *
 * The `padding` prop uniformly tightens everything — py, gap, and px —
 * so the card feels proportionally denser without per-slot overrides.
 *
 * Scale reference (Tailwind v4 spacing):
 *   default → 1.5rem (24px, equivalent to p-6)
 *   sm      → 0.75rem (12px, equivalent to p-3)
 *   none    → 0px
 * ----------------------------------------------------------------------- */
type CardPadding = "default" | "sm" | "none"

/**
 * Maps each `padding` prop value to a CSS length. These are set as
 * `--card-padding` on the Card element.
 *
 * The values use Tailwind's `--spacing` function where available so they
 * scale if the project overrides the base spacing unit. The fallback
 * values (1.5rem, 0.75rem) match Tailwind's default 4px grid:
 *   p-6 = 6 × 4px = 24px = 1.5rem
 *   p-3 = 3 × 4px = 12px = 0.75rem
 */
const cardPaddingMap: Record<CardPadding, string> = {
  default: "1.5rem",
  sm: "0.75rem",
  none: "0px",
}

function Card({
  className,
  size = "default",
  flush = false,
  rounded = "4xl",
  padding = "default",
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
  /**
   * Controls the spacing density of the card and all its sub-components.
   *
   * Sets a CSS custom property (`--card-padding`) that the Card uses for
   * its vertical padding and gap, and that child components (CardHeader,
   * CardContent, CardFooter) use for their horizontal padding.
   *
   * This keeps spacing uniform across the entire card — one prop to
   * tighten or loosen everything proportionally.
   *
   * @default "default"
   *
   * @example
   * // Compact nested card
   * <Card flush>
   *   <Card rounded="3xl" padding="sm">
   *     <CardHeader>…</CardHeader>
   *     <CardContent>…</CardContent>
   *   </Card>
   * </Card>
   */
  padding?: CardPadding
}) {
  return (
    <div
      data-slot="card"
      data-size={size}
      /*
       * Two CSS custom properties are set here and inherited by all
       * card sub-components:
       *
       *   --card-radius  → consumed by rounded-() in Card, CardHeader,
       *                     CardFooter, and image child selectors
       *   --card-padding → consumed by p-() / px-() / py-() / gap-()
       *                     in Card and all child slot components
       *
       * This "set once, inherit everywhere" pattern avoids prop drilling
       * and keeps the child components' class strings static — they
       * always reference the variable, never a concrete value.
       */
      style={
        {
          "--card-radius": cardRadiusMap[rounded],
          "--card-padding": cardPaddingMap[padding],
          ...style,
        } as React.CSSProperties
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
        "group/card flex flex-col overflow-hidden rounded-(--card-radius) bg-card text-sm text-card-foreground shadow-md ring-1 ring-foreground/5 has-[>img:first-child]:pt-0 dark:ring-foreground/10 *:[img:first-child]:rounded-t-(--card-radius) *:[img:last-child]:rounded-b-(--card-radius)",
        /*
         * When not flush, apply vertical padding and gap using the
         * --card-padding variable. This means `padding="sm"` tightens
         * the vertical spacing automatically alongside the horizontal
         * spacing in child components.
         *
         * The `data-[size=sm]` overrides are a legacy mechanism from
         * before the padding prop existed — they remain for backwards
         * compatibility with the `size="sm"` API.
         */
        !flush &&
          "py-(--card-padding) gap-(--card-padding) data-[size=sm]:gap-4 data-[size=sm]:py-4",
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
         * px-(--card-padding,1.5rem) — inherits the Card's padding for
         * horizontal inset. The fallback (1.5rem = p-6) ensures sensible
         * spacing if CardHeader is ever rendered outside a Card context
         * (e.g. in tests or Storybook).
         *
         * rounded-t-(--card-radius,2rem) — same inheritance pattern for
         * the top border-radius, with a 2rem (≈ radius-4xl) fallback.
         */
        "group/card-header @container/card-header grid auto-rows-min items-start gap-1.5 rounded-t-(--card-radius,2rem) px-(--card-padding,1.5rem) group-data-[size=sm]/card:px-4 has-data-[slot=card-action]:grid-cols-[1fr_auto] has-data-[slot=card-description]:grid-rows-[auto_auto] [.border-b]:pb-6 group-data-[size=sm]/card:[.border-b]:pb-4",
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
      className={cn(
        /*
         * px-(--card-padding,1.5rem) — inherits horizontal padding from
         * the parent Card's --card-padding variable. When Card uses
         * padding="sm", this automatically tightens to 0.75rem (12px).
         */
        "px-(--card-padding,1.5rem) group-data-[size=sm]/card:px-4",
        className
      )}
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
         * Same inheritance pattern as CardHeader and CardContent:
         * --card-padding for horizontal spacing, --card-radius for
         * bottom corner rounding, both with sensible fallbacks.
         */
        "flex items-center rounded-b-(--card-radius,2rem) px-(--card-padding,1.5rem) group-data-[size=sm]/card:px-4 [.border-t]:pt-6 group-data-[size=sm]/card:[.border-t]:pt-4",
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
