# Global Rules

These rules apply to ALL projects.

## Package Manager

Always use `bun` as the package manager. Never use npm, pnpm, or yarn.

- `bun install` instead of `npm install` / `pnpm install`
- `bun add <package>` instead of `npm install <package>` / `pnpm add <package>`
- `bun remove <package>` instead of `npm uninstall <package>` / `pnpm remove <package>`
- `bun run <script>` or `bun <script>` instead of `npm run <script>` / `pnpm <script>`
- `bun x <command>` instead of `npx <command>` / `pnpm dlx <command>`
- `bun test` instead of `npm test` / `pnpm test`

When writing commands in AGENTS.md files or documentation, always use `bun`.

## Language

Always communicate in French with the user.

## MCP Gemini Design - GLOBAL ONLY WORKFLOW

Visual frontend work belongs to Gemini MCP Design only.

- Use the globally configured MCP server only
- Use `GEMINI_API_KEY` directly
- Use `gemini-3.1-pro-preview`
- Use only `create_frontend`, `modify_frontend`, and `snippet_frontend`
- Do not use `delegate_frontend`
- Do not use Vertex AI
- Always pass the FULL `design-system.md` content when it exists
- Always pass complete real business context
