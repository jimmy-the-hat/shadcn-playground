const isGithubPages = process.env.GITHUB_ACTIONS === "true"

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  ...(isGithubPages && { basePath: "/shadcn-playground" }),
  images: {
    unoptimized: true,
  },
  transpilePackages: ["@workspace/ui"],
}

export default nextConfig
