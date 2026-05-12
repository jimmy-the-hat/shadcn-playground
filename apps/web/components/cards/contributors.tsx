"use client"

import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@workspace/ui/components/avatar"
import { Badge } from "@workspace/ui/components/badge"
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@workspace/ui/components/card"

import { SourceLink } from "@/components/source-link"

// GitHub usernames displayed as contributor avatars.
const usernames = [
  "shadcn",
  "vercel",
  "nextjs",
  "tailwindlabs",
  "typescript-lang",
  "eslint",
  "prettier",
  "babel",
  "webpack",
  "rollup",
  "parcel",
  "vite",
  "react",
  "vue",
  "angular",
  "solid",
]

export function Contributors() {
  return (
    <div className="flex flex-col gap-2">
      <Card className="max-w-sm">
        <CardHeader>
          <CardTitle>
            Contributors <Badge variant="secondary">312</Badge>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex flex-wrap gap-2">
            {usernames.map((username) => (
              <Avatar key={username} className="grayscale">
                <AvatarImage
                  src={`https://github.com/${username}.png`}
                  alt={username}
                />
                <AvatarFallback>{username.charAt(0)}</AvatarFallback>
              </Avatar>
            ))}
          </div>
        </CardContent>
        <CardFooter>
          <a href="#" className="text-sm underline underline-offset-4">
            + 810 contributors
          </a>
        </CardFooter>
      </Card>
      <SourceLink path="apps/web/components/cards/contributors.tsx" />
    </div>
  )
}
