import { put, head } from "@vercel/blob";

const BLOB_KEY = "admin-config.json";

export interface AdminConfig {
  hiddenProjects: string[];
}

const DEFAULT_CONFIG: AdminConfig = {
  hiddenProjects: [],
};

export async function getAdminConfig(): Promise<AdminConfig> {
  try {
    const token = process.env.BLOB_READ_WRITE_TOKEN;
    const result = await head(BLOB_KEY, { token });
    if (!result?.url) return DEFAULT_CONFIG;

    const res = await fetch(result.url, { next: { revalidate: 0 } });
    if (!res.ok) return DEFAULT_CONFIG;

    return (await res.json()) as AdminConfig;
  } catch {
    return DEFAULT_CONFIG;
  }
}

export async function saveAdminConfig(config: AdminConfig): Promise<void> {
  await put(BLOB_KEY, JSON.stringify(config), {
    access: "public",
    addRandomSuffix: false,
    token: process.env.BLOB_READ_WRITE_TOKEN,
    contentType: "application/json",
  });
}
