"use client"

import { PlusIcon, SearchIcon } from "lucide-react"

import { Button } from "@workspace/ui/components/button"
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "@workspace/ui/components/input-group"
import {
  ToggleGroup,
  ToggleGroupItem,
} from "@workspace/ui/components/toggle-group"

import { SourceLink } from "@/components/source-link"

export function CatalogToolbar() {
  return (
    <div className="flex flex-col gap-2">
      <div className="flex items-center gap-3">
        <InputGroup className="flex-1">
          <InputGroupAddon>
            <SearchIcon />
          </InputGroupAddon>
          <InputGroupInput placeholder="Search releases or catalog..." />
        </InputGroup>
        <Button>
          <PlusIcon />
          Upload New Release
        </Button>
      </div>
      <ToggleGroup type="single" defaultValue="releases" variant="outline">
        <ToggleGroupItem value="all-tracks">All Tracks</ToggleGroupItem>
        <ToggleGroupItem value="releases">Releases</ToggleGroupItem>
        <ToggleGroupItem value="top-earners">Top Earners</ToggleGroupItem>
      </ToggleGroup>
      <SourceLink path="apps/web/components/cards-02/catalog-toolbar.tsx" />
    </div>
  )
}
