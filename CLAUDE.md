# CLAUDE.md — fancoach-landing

Session guide for Claude Code working in this repo. Read this on every session start.

## What this repo is

Public marketing site for **FanCoach** (the mobile app in `~/Documents/FanCoachApp`). Next.js 14 App Router + TypeScript + Tailwind. Production domain `www.fancoach.ai` (with `fancoach-landing.vercel.app` as the Vercel alias). Source of truth on GitHub: `jabbmate/fancoach-landing` (`main` branch).

## Deploy pipeline (already wired)

- **Vercel project**: `yuvas-projects-920519d7/fancoach-landing` (project id `prj_iVSgflo4AKvX5TVLEBOmHKHBb5BJ`). Hobby plan.
- **GitHub ↔ Vercel Git integration is connected.** Pushing to `main` auto-deploys to production. Pushing any other branch auto-creates a preview deployment. You do **not** need to invoke `vercel deploy` for the normal path — `git push` is the trigger.
- Local directory is linked (`.vercel/repo.json` present, gitignored).
- CLI: Vercel CLI `54.4.1`, authed as `jabbmate`.

## Standing workflow: commit → push (auto-deploys)

Whenever you make a code or content change in this repo that the user has approved, follow this exact sequence. Do not skip steps.

1. **Sanity-check the build locally** (cheap, catches typos that would fail the Vercel build):
   ```bash
   npm run build
   ```
   If the build fails, fix the error before continuing. Do not push a broken build.

2. **Commit and push to GitHub** (`origin/main`):
   ```bash
   git add <specific files you changed>     # prefer named files over `git add -A`
   git commit -m "<concise message — why, not what>"
   git push origin main
   ```
   Follow the standard commit-message conventions from the system prompt (HEREDOC, Co-Authored-By trailer). Never `--force` push to `main`. Never `--amend` a pushed commit.

3. **Watch the deploy land**. The push triggers Vercel automatically. To monitor and grab the production URL:
   ```bash
   vercel ls --yes | head -5      # list latest deployments; the top row is the one we just pushed
   vercel inspect <deployment-url-from-above>   # optional: status + build logs
   ```
   If you need to tail logs while it's building:
   ```bash
   vercel logs <deployment-url>
   ```

4. **Report back to the user** with: the commit SHA, the GitHub commit URL, and the production URL (`https://www.fancoach.ai` once it's `Ready`). One or two lines, not a summary essay.

### When you SHOULD use the CLI to deploy directly

The Git integration covers ~all normal cases. Use `vercel deploy` directly only when:

- You want to deploy **uncommitted local changes** for a quick preview before committing. Use `vercel deploy --yes` (preview, not prod).
- The user explicitly asks for a CLI-driven production deploy (e.g. to force a rebuild without a code change). Use `vercel deploy --prod --yes`. Confirm with the user first if it's not obviously what they asked for.
- The GitHub integration is broken / paused and a push didn't trigger a build.

### When NOT to push

- The change is purely local / non-functional (e.g. you only edited this `CLAUDE.md`, a scratch file, or something `.gitignore`'d). Commit only, no push needed unless the user wants it.
- The build fails. Fix first.
- The user explicitly says "don't deploy yet" or is mid-iteration. Hold the commit on a feature branch (which deploys to preview, not prod) or just don't push.
- You're working on a non-`main` branch. Pushing the branch produces a **preview** deploy automatically — share the preview URL with the user; don't merge to `main` without explicit approval.

## Useful commands

```bash
vercel ls                          # recent deployments
vercel inspect <url>               # build status + logs for a specific deployment
vercel logs <url>                  # tail runtime/build logs
vercel env pull .env.local         # sync env vars to local
vercel env ls                      # list env vars (names only)
vercel domains ls                  # list domains attached to the project
vercel rollback <deployment-url>   # promote a previous deployment back to prod (DESTRUCTIVE — confirm with user)
```

## Repo facts worth knowing

- **Stack**: Next.js 14.0.4, React 18, Tailwind, `lucide-react`. No test suite. Lint via `npm run lint`.
- **Routes**: `/`, `/about`, `/hiring`, `/privacy`, `/test`, plus `sitemap.ts`. See `app/`.
- **Email capture is fake** (`components/EmailCaptureForm.tsx` — simulated submit, no backend). If asked to make it real, wire it to an actual provider before claiming the form works.
- **Metadata base URL** is `https://fancoach.ai` (`app/layout.tsx`). The live domain is actually served at `www.fancoach.ai` per Vercel — keep `metadataBase` in sync if either changes.
- **Large media in `public/`**: two `.mov` ad files and six iPhone screenshots. Don't accidentally delete them — they're referenced by `VideoShowcase` and `AppShowcase`.

## Guardrails

- Never push to `main` with `--force` or `--no-verify`.
- Never run `vercel rm`, `vercel domains rm`, or anything that mutates the Vercel project's domains/env without explicit user approval in the same session.
- If `vercel deploy` errors with auth / link issues, surface the error and ask — don't try to re-link or re-auth silently.
- Don't add the `Co-Authored-By` trailer when the user asks for clean commits without it.
