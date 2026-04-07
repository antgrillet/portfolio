"use client";

import { useEffect, useState, useCallback } from "react";
import { Eye, EyeOff, LogOut, Save, RefreshCw, Lock } from "lucide-react";

interface ProjectEntry {
  vercelName: string;
  framework: string | null;
  updatedAt: string;
  hidden: boolean;
}

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("fr-FR", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });
}

export default function AdminPage() {
  const [loggedIn, setLoggedIn] = useState<boolean | null>(null);
  const [password, setPassword] = useState("");
  const [loginError, setLoginError] = useState("");
  const [loginLoading, setLoginLoading] = useState(false);

  const [projects, setProjects] = useState<ProjectEntry[]>([]);
  const [loading, setLoading] = useState(false);
  const [saving, setSaving] = useState(false);
  const [saveMsg, setSaveMsg] = useState<string | null>(null);
  const [fetchError, setFetchError] = useState<string | null>(null);

  const fetchProjects = useCallback(async () => {
    setLoading(true);
    setFetchError(null);
    try {
      const res = await fetch("/api/admin/config");
      if (res.status === 401) {
        setLoggedIn(false);
        return;
      }
      if (!res.ok) throw new Error("Erreur serveur");
      const data = await res.json();
      setProjects(data.projects ?? []);
      setLoggedIn(true);
    } catch (e) {
      setFetchError(e instanceof Error ? e.message : "Erreur inconnue");
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchProjects();
  }, [fetchProjects]);

  async function handleLogin(e: React.FormEvent) {
    e.preventDefault();
    setLoginLoading(true);
    setLoginError("");
    try {
      const res = await fetch("/api/admin/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ password }),
      });
      if (!res.ok) {
        const d = await res.json();
        setLoginError(d.error ?? "Mot de passe incorrect");
        return;
      }
      setPassword("");
      await fetchProjects();
    } catch {
      setLoginError("Erreur réseau");
    } finally {
      setLoginLoading(false);
    }
  }

  async function handleLogout() {
    await fetch("/api/admin/logout", { method: "POST" });
    setLoggedIn(false);
    setProjects([]);
  }

  function toggleHidden(vercelName: string) {
    setProjects((prev) =>
      prev.map((p) =>
        p.vercelName === vercelName ? { ...p, hidden: !p.hidden } : p
      )
    );
    setSaveMsg(null);
  }

  async function handleSave() {
    setSaving(true);
    setSaveMsg(null);
    try {
      const hiddenProjects = projects
        .filter((p) => p.hidden)
        .map((p) => p.vercelName);

      const res = await fetch("/api/admin/config", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ hiddenProjects }),
      });
      if (!res.ok) throw new Error("Erreur lors de la sauvegarde");
      setSaveMsg("Sauvegardé ✓");
    } catch (e) {
      setSaveMsg(e instanceof Error ? e.message : "Erreur");
    } finally {
      setSaving(false);
      setTimeout(() => setSaveMsg(null), 3000);
    }
  }

  // Login screen
  if (loggedIn === false || loggedIn === null) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-zinc-50 px-4">
        <div className="w-full max-w-sm">
          <div className="mb-8 text-center">
            <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-zinc-950">
              <Lock className="h-5 w-5 text-white" />
            </div>
            <h1 className="font-display text-2xl font-medium tracking-tight text-zinc-950">
              Panel admin
            </h1>
            <p className="mt-1 text-sm text-zinc-500">
              Gestion des projets du portfolio
            </p>
          </div>

          <form onSubmit={handleLogin} className="space-y-4">
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Mot de passe"
              required
              autoFocus
              className="w-full rounded-2xl border border-zinc-200 bg-white px-5 py-3.5 text-sm text-zinc-950 outline-none transition placeholder:text-zinc-400 focus:border-violet-500 focus:ring-2 focus:ring-violet-500/20"
            />
            {loginError && (
              <p className="text-xs text-red-500">{loginError}</p>
            )}
            <button
              type="submit"
              disabled={loginLoading || !password}
              className="w-full rounded-2xl bg-zinc-950 px-5 py-3.5 text-sm font-semibold text-white transition hover:bg-zinc-800 disabled:opacity-50"
            >
              {loginLoading ? "Connexion..." : "Se connecter"}
            </button>
          </form>
        </div>
      </div>
    );
  }

  const hiddenCount = projects.filter((p) => p.hidden).length;

  return (
    <div className="min-h-screen bg-zinc-50">
      {/* Header */}
      <header className="border-b border-zinc-200 bg-white px-6 py-4">
        <div className="mx-auto flex max-w-5xl items-center justify-between">
          <div>
            <h1 className="font-display text-lg font-medium text-zinc-950">
              Panel admin
            </h1>
            <p className="text-xs text-zinc-500">
              {projects.length} projets •{" "}
              {hiddenCount > 0 ? (
                <span className="text-orange-500">{hiddenCount} masqué{hiddenCount > 1 ? "s" : ""}</span>
              ) : (
                <span className="text-emerald-500">tous visibles</span>
              )}
            </p>
          </div>
          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={fetchProjects}
              disabled={loading}
              title="Rafraîchir"
              className="flex h-9 w-9 items-center justify-center rounded-xl border border-zinc-200 bg-white text-zinc-600 transition hover:bg-zinc-50 disabled:opacity-50"
            >
              <RefreshCw className={`h-4 w-4 ${loading ? "animate-spin" : ""}`} />
            </button>
            <button
              type="button"
              onClick={handleSave}
              disabled={saving}
              className="flex items-center gap-2 rounded-xl bg-zinc-950 px-4 py-2 text-sm font-semibold text-white transition hover:bg-zinc-800 disabled:opacity-50"
            >
              <Save className="h-4 w-4" />
              {saving ? "Sauvegarde..." : "Sauvegarder"}
            </button>
            <button
              type="button"
              onClick={handleLogout}
              title="Se déconnecter"
              className="flex h-9 w-9 items-center justify-center rounded-xl border border-zinc-200 bg-white text-zinc-600 transition hover:bg-zinc-50"
            >
              <LogOut className="h-4 w-4" />
            </button>
          </div>
        </div>
      </header>

      {/* Save feedback */}
      {saveMsg && (
        <div className="border-b border-emerald-100 bg-emerald-50 px-6 py-2.5 text-center text-sm font-medium text-emerald-700">
          {saveMsg}
        </div>
      )}

      <main className="mx-auto max-w-5xl px-6 py-8">
        {fetchError && (
          <div className="mb-6 rounded-2xl border border-red-100 bg-red-50 p-4 text-sm text-red-600">
            {fetchError}
          </div>
        )}

        {loading && projects.length === 0 ? (
          <div className="space-y-3">
            {[...Array(6)].map((_, i) => (
              <div
                key={i}
                className="h-16 animate-pulse rounded-2xl bg-zinc-200"
              />
            ))}
          </div>
        ) : (
          <>
            <p className="mb-4 text-xs font-medium uppercase tracking-widest text-zinc-400">
              Projets Vercel — triés par dernier push GitHub
            </p>
            <div className="space-y-2">
              {projects.map((project) => (
                <div
                  key={project.vercelName}
                  className={`flex items-center justify-between rounded-2xl border px-5 py-4 transition ${
                    project.hidden
                      ? "border-orange-100 bg-orange-50/50"
                      : "border-zinc-200 bg-white"
                  }`}
                >
                  <div className="min-w-0 flex-1">
                    <div className="flex items-center gap-3">
                      <span
                        className={`font-display text-base font-medium ${
                          project.hidden ? "text-zinc-400 line-through" : "text-zinc-950"
                        }`}
                      >
                        {project.vercelName}
                      </span>
                      {project.framework && (
                        <span className="rounded-full bg-zinc-100 px-2.5 py-0.5 text-xs font-medium text-zinc-500">
                          {project.framework}
                        </span>
                      )}
                      {project.hidden && (
                        <span className="rounded-full bg-orange-100 px-2.5 py-0.5 text-xs font-medium text-orange-600">
                          Masqué
                        </span>
                      )}
                    </div>
                    <p className="mt-0.5 text-xs text-zinc-400">
                      Mis à jour le {formatDate(project.updatedAt)}
                    </p>
                  </div>

                  <button
                    type="button"
                    onClick={() => toggleHidden(project.vercelName)}
                    title={project.hidden ? "Afficher" : "Masquer"}
                    className={`ml-4 flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border transition ${
                      project.hidden
                        ? "border-orange-200 bg-orange-100 text-orange-600 hover:bg-orange-200"
                        : "border-zinc-200 bg-zinc-50 text-zinc-500 hover:bg-zinc-100"
                    }`}
                  >
                    {project.hidden ? (
                      <EyeOff className="h-4 w-4" />
                    ) : (
                      <Eye className="h-4 w-4" />
                    )}
                  </button>
                </div>
              ))}
            </div>
          </>
        )}
      </main>
    </div>
  );
}
