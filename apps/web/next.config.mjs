/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  basePath: "/shadcn-playground",
  images: {
    unoptimized: true,
  },
  transpilePackages: ["@workspace/ui"],
}

export default nextConfig
