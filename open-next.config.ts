import { defineCloudflareConfig } from "@opennextjs/cloudflare";

const config = defineCloudflareConfig({});

// Prevent recursive builds by keeping OpenNext's internal Next.js build command separate.
config.buildCommand = "next build";

export default config;
