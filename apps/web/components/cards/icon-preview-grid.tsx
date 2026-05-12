"use client"

import {
  ArrowLeftIcon,
  ArrowRightIcon,
  CheckIcon,
  ChevronDownIcon,
  ChevronRightIcon,
  CopyIcon,
  CircleAlertIcon,
  Loader2Icon,
  MinusIcon,
  MoreHorizontalIcon,
  PlusIcon,
  SearchIcon,
  SettingsIcon,
  ShareIcon,
  ShoppingBagIcon,
  TrashIcon,
} from "lucide-react"

import { Card, CardContent } from "@workspace/ui/components/card"

import { SourceLink } from "@/components/source-link"

const PREVIEW_ICONS = [
  CopyIcon,
  CircleAlertIcon,
  TrashIcon,
  ShareIcon,
  ShoppingBagIcon,
  MoreHorizontalIcon,
  Loader2Icon,
  PlusIcon,
  MinusIcon,
  ArrowLeftIcon,
  ArrowRightIcon,
  CheckIcon,
  ChevronDownIcon,
  ChevronRightIcon,
  SearchIcon,
  SettingsIcon,
]

export function IconPreviewGrid() {
  return (
    <div className="flex flex-col gap-2">
      <Card>
        <CardContent>
          <div className="grid grid-cols-8 place-items-center gap-4">
            {PREVIEW_ICONS.map((Icon, index) => (
              <div
                key={index}
                className="flex size-8 items-center justify-center rounded-md ring ring-border *:[svg]:size-4"
              >
                <Icon />
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
      <SourceLink path="apps/web/components/cards/icon-preview-grid.tsx" />
    </div>
  )
}
