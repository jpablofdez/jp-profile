import { defineCloudflareConfig } from "@opennextjs/cloudflare";

const config = defineCloudflareConfig({});

// Prevent recursive builds by keeping OpenNext's internal Next.js build command separate.
config.buildCommand = "npm run build:next";

export default config;
