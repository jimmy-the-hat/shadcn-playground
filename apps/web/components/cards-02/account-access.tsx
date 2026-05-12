"use client"

import { AlertCircleIcon, ArrowRightIcon, LockKeyholeIcon } from "lucide-react"

import { Button } from "@workspace/ui/components/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@workspace/ui/components/card"
import { Field, FieldGroup, FieldLabel } from "@workspace/ui/components/field"
import { Input } from "@workspace/ui/components/input"
import {
  Item,
  ItemContent,
  ItemDescription,
  ItemMedia,
  ItemTitle,
} from "@workspace/ui/components/item"

import { SourceLink } from "@/components/source-link"

export function AccountAccess() {
  return (
    <div className="flex flex-col gap-2">
      <Card>
        <CardHeader>
          <CardTitle>Account Access</CardTitle>
          <CardDescription>
            Update your credentials or re-authenticate.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <FieldGroup>
            <Field>
              <FieldLabel htmlFor="email-address">Email Address</FieldLabel>
              <Input
                id="email-address"
                type="email"
                defaultValue="artist@studio.inc"
              />
            </Field>
            <Field>
              <div className="flex items-center justify-between">
                <FieldLabel htmlFor="current-password">
                  Current Password
                </FieldLabel>
                <a
                  href="#"
                  className="text-xs font-medium tracking-wider text-muted-foreground uppercase hover:text-foreground"
                >
                  Forgot?
                </a>
              </div>
              <Input
                id="current-password"
                type="password"
                defaultValue="password123"
              />
            </Field>
          </FieldGroup>
        </CardContent>
        <CardFooter className="flex-col gap-4">
          <Button className="w-full">
            <LockKeyholeIcon />
            Update Security
          </Button>
          <Item asChild variant="muted">
            <a href="#">
              <ItemMedia variant="icon">
                <AlertCircleIcon className="text-destructive" />
              </ItemMedia>
              <ItemContent>
                <ItemTitle>Danger Zone</ItemTitle>
                <ItemDescription className="line-clamp-1">
                  Archive account and remove catalog
                </ItemDescription>
              </ItemContent>
              <ArrowRightIcon className="size-4" />
            </a>
          </Item>
        </CardFooter>
      </Card>
      <SourceLink path="apps/web/components/cards-02/account-access.tsx" />
    </div>
  )
}
