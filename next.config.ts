import type { NextConfig } from "next";

const nextConfig: NextConfig = {
	images: {
		remotePatterns: [
			{
				protocol: "https",
				hostname: "api.screenshotone.com",
				pathname: "/take/**",
			},
		],
	},
};

export default nextConfig;
