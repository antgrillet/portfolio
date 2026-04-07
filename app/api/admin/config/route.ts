import { NextRequest, NextResponse } from "next/server";
import { isAuthenticated } from "@/lib/admin-auth";
import { getAdminConfig, saveAdminConfig } from "@/lib/admin-config";

interface VercelProjectBasic {
  id: string;
  name: string;
  updatedAt: number;
  framework: string | null;
}

async function fetchAllVercelProjects(): Promise<VercelProjectBasic[]> {
  const token = process.env.VERCEL_TOKEN;
  if (!token) return [];
  try {
    const res = await fetch("https://api.vercel.com/v9/projects", {
      headers: { Authorization: `Bearer ${token}` },
      next: { revalidate: 60 },
    });
    if (!res.ok) return [];
    const data = await res.json();
    return data.projects ?? [];
  } catch {
    return [];
  }
}

export async function GET(req: NextRequest) {
  if (!isAuthenticated(req)) {
    return NextResponse.json({ error: "Non autorisé" }, { status: 401 });
  }

  const [config, vercelProjects] = await Promise.all([
    getAdminConfig(),
    fetchAllVercelProjects(),
  ]);

  const projects = vercelProjects
    .sort((a, b) => b.updatedAt - a.updatedAt)
    .map((p) => ({
      vercelName: p.name,
      framework: p.framework,
      updatedAt: new Date(p.updatedAt).toISOString(),
      hidden: config.hiddenProjects.includes(p.name),
    }));

  return NextResponse.json({ config, projects });
}

export async function POST(req: NextRequest) {
  if (!isAuthenticated(req)) {
    return NextResponse.json({ error: "Non autorisé" }, { status: 401 });
  }

  const body = await req.json();
  const hiddenProjects: string[] = Array.isArray(body.hiddenProjects)
    ? body.hiddenProjects
    : [];

  await saveAdminConfig({ hiddenProjects });

  return NextResponse.json({ ok: true, hiddenProjects });
}
