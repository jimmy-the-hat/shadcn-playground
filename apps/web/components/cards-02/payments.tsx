"use client"

import {
  MoreHorizontalIcon,
  GaugeIcon,
  ChevronRightIcon,
  CalendarIcon,
  RepeatIcon,
  RefreshCwIcon,
} from "lucide-react"

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@workspace/ui/components/breadcrumb"
import { Button } from "@workspace/ui/components/button"
import { Card, CardContent, CardHeader } from "@workspace/ui/components/card"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@workspace/ui/components/dropdown-menu"
import {
  Item,
  ItemContent,
  ItemDescription,
  ItemGroup,
  ItemMedia,
  ItemTitle,
} from "@workspace/ui/components/item"

export function Payments() {
  return (
    <Card>
      <CardHeader className="flex flex-col gap-3">
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href="#">Home</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button size="icon-sm" variant="ghost">
                    <MoreHorizontalIcon />
                    <span className="sr-only">Account options</span>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="start">
                  <DropdownMenuGroup>
                    <DropdownMenuItem>Profile</DropdownMenuItem>
                    <DropdownMenuItem>Statements</DropdownMenuItem>
                    <DropdownMenuItem>Documents</DropdownMenuItem>
                  </DropdownMenuGroup>
                </DropdownMenuContent>
              </DropdownMenu>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>Payments</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </CardHeader>
      <CardContent>
        <ItemGroup>
          <Item asChild variant="muted">
            <a href="#">
              <ItemMedia variant="icon">
                <GaugeIcon />
              </ItemMedia>
              <ItemContent>
                <ItemTitle>Change transfer limit</ItemTitle>
                <ItemDescription>
                  Adjust how much you can send from your balance.
                </ItemDescription>
              </ItemContent>
              <ChevronRightIcon
                className="size-4 shrink-0 text-muted-foreground"
              />
            </a>
          </Item>
          <Item asChild variant="muted">
            <a href="#">
              <ItemMedia variant="icon">
                <CalendarIcon />
              </ItemMedia>
              <ItemContent>
                <ItemTitle>Scheduled transfers</ItemTitle>
                <ItemDescription>
                  Set up a transfer to send at a later date.
                </ItemDescription>
              </ItemContent>
              <ChevronRightIcon
                className="size-4 shrink-0 text-muted-foreground"
              />
            </a>
          </Item>
          <Item asChild variant="muted">
            <a href="#">
              <ItemMedia variant="icon">
                <RepeatIcon />
              </ItemMedia>
              <ItemContent>
                <ItemTitle>Direct Debits</ItemTitle>
                <ItemDescription>
                  Set up and manage regular payments.
                </ItemDescription>
              </ItemContent>
              <ChevronRightIcon
                className="size-4 shrink-0 text-muted-foreground"
              />
            </a>
          </Item>
          <Item asChild variant="muted">
            <a href="#">
              <ItemMedia variant="icon">
                <RefreshCwIcon />
              </ItemMedia>
              <ItemContent>
                <ItemTitle>Recurring card payments</ItemTitle>
                <ItemDescription>
                  Manage your repeated card transactions.
                </ItemDescription>
              </ItemContent>
              <ChevronRightIcon
                className="size-4 shrink-0 text-muted-foreground"
              />
            </a>
          </Item>
        </ItemGroup>
      </CardContent>
    </Card>
  )
}
