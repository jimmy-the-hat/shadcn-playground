"use client"

import { Button } from "@workspace/ui/components/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@workspace/ui/components/card"

import { SourceLink } from "@/components/source-link"

export function QrConnect() {
  return (
    <div className="flex flex-col gap-2">
      <Card>
        <CardContent className="flex justify-center pt-6">
          <div className="rounded-xl border bg-white p-4">
            <div className="grid size-40 grid-cols-5 grid-rows-5 gap-1">
              {Array.from({ length: 25 }).map((_, i) => (
                <div
                  key={i}
                  className={`rounded-sm ${
                    [0, 1, 2, 4, 5, 6, 10, 12, 14, 18, 20, 22, 23, 24].includes(
                      i
                    )
                      ? "bg-black"
                      : "bg-white"
                  }`}
                />
              ))}
            </div>
          </div>
        </CardContent>
        <CardHeader className="text-center">
          <CardTitle>Scan to connect your mobile device</CardTitle>
          <CardDescription>
            Open the Ledger mobile app and scan this code to link your device.
          </CardDescription>
        </CardHeader>
        <CardFooter>
          <Button variant="secondary" className="w-full">
            Got it
          </Button>
        </CardFooter>
      </Card>
      <SourceLink path="apps/web/components/cards-02/qr-connect.tsx" />
    </div>
  )
}
