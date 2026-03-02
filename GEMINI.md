# GEMINI.md

Project instructions for Gemini CLI, Google AI coding tools, and any AI agent contributing to this repository.

## 1) Project Identity

Project name: `leter.net`  
Type: private, individually owned personal domain infrastructure  
Owner/operator: [Lewsion](https://lewsion.com) (Technical Oversight)  
Status: private administration, not a public mailbox platform

This repository is the public-facing website foundation, not the full mail product for now.

## 2) Non-Negotiable Product Truths

Always preserve these facts in code and copy:

1. leter.net currently uses **Forward Email** as the active provider for routing.
2. leter.net currently does **not** operate mailbox storage directly.
3. leter.net must **not** claim currently deployed leter-operated end-to-end encryption.
4. Domain registration is managed via [SpaceShip](https://www.spaceship.com).
5. DNS and mail-security DNS policy are managed via [Cloudflare DNS](https://www.cloudflare.com).
6. Technical administration and transparency reporting are provided by [Lewsion](https://lewsion.com).
7. Web Key Directory (WKD) is currently delegated to `keys.openpgp.org` via DNS. The standalone direct WKD page and local `openpgpkey` directory have been removed in favor of this interim public delegation.
8. Matrix server delegation is implemented via `.well-known` files in the `public/` directory, pointing to `matrix.leter.net`.

## 3) Allowed vs Forbidden Messaging

Use language like:

- "Current provider: Forward Email."
- "Zero-knowledge provider model."
- "Private domain infrastructure."
- "Discretionary alias management."
- "leter.net does not currently operate mailbox storage directly."

Do not use language like:

- "Fully self-hosted today."
- "Leter currently provides end-to-end encryption."
- "Unbreakable encryption."
- "Anonymous forever."

## 4) Mandatory Plan-and-Approval Workflow

For any substantial change (layout, copy strategy, legal/security sections, architecture), follow this order:

1. Read current files and summarize the existing state.
2. Propose a short plan with clear steps.
3. Ask for explicit approval before major edits.
4. Only after approval, implement changes.
5. Summarize what changed, what was not changed, and any follow-up decisions needed.

Approval trigger examples:

- "Approve this plan and I will implement."
- Wait for user response such as "Yes", "Approved", or equivalent.

If the user says "fix it now" or clearly requests immediate edits, execute directly.

## 5) Legal/Policy Drafting Gate (Required)

Before writing or rewriting legal pages (`terms`, `privacy`, `abuse`, `dmca`) in any meaningful way, ask targeted questions first and wait for answers.

Ask at minimum:

1. Legal entity name and jurisdiction.
2. Governing law/venue preference.
3. Official legal contact emails.
4. Abuse workflow and response expectation.
5. DMCA agent/contact details.
6. Data retention policy for logs.
7. Allowed/prohibited use specifics.
8. Whether current text is placeholder or intended for production.

Do not invent legal claims when details are unknown. Mark unknowns as placeholders explicitly.

## 6) Design Direction

Current visual direction:

1. Dark, minimal, high-contrast.
2. Resend-inspired rhythm (clean spacing, strong hierarchy, low-noise UI).
3. Accent color: `#4ade80`.
4. Typography: Inter.
5. Subtle effects only, no heavy gradients, no noisy animation.
6. Professional, controlled tone.

## 7) Current Site Information Architecture

Homepage sections:

1. Hero
2. Origin story
3. Domain Status
4. Security posture (includes WKD entry)
5. Infrastructure purpose
6. Principles
7. Footer with legal links and provider disclosure

Legal & utility pages:

- `/terms`
- `/privacy`
- `/abuse`
- `/dmca`

Updates reference:

- `https://blogs.leter.net`

## 8) Repository Structure and Purpose

```text
leter.net/
├─ GEMINI.md                         # AI operator instructions (this file)
├─ README.md                         # Setup, local dev, Docker, Coolify notes
├─ CONTRIBUTING.md                   # Contribution guardrails
├─ package.json                      # Scripts and dependencies
├─ package-lock.json                 # Lockfile
├─ astro.config.mjs                  # Astro config (static output)
├─ tailwind.config.cjs               # Tailwind theme tokens
├─ postcss.config.cjs                # PostCSS pipeline
├─ Dockerfile                        # Multi-stage build + nginx runtime (legacy proxy)
├─ wrangler.toml                     # Cloudflare Pages deployment configuration
├─ .gitignore
├─ .dockerignore
├─ public/
│  ├─ .well-known/
│  │  └─ matrix/
│  │     ├─ server               # Matrix server delegation
│  │     └─ client               # Matrix client delegation
│  ├─ _headers                  # Cloudflare Pages headers (CORS)
│  └─ favicon.svg
└─ src/
   ├─ styles/
   │  └─ global.css                  # Global tokens/utilities/theme primitives
   ├─ pages/
   │  ├─ index.astro                 # Homepage assembly
   │  ├─ terms.astro                 # Terms page
   │  ├─ privacy.astro               # Privacy page
   │  ├─ abuse.astro                 # Abuse page
   │  └─ dmca.astro                  # DMCA page
   └─ components/
      ├─ Hero.astro
      ├─ OriginStory.astro
      ├─ CurrentState.astro
      ├─ SecurityPosture.astro
      ├─ InitiativeScope.astro
      ├─ Principles.astro
      └─ SiteFooter.astro
```

## 9) Engineering Constraints

1. Keep the project static (Astro static output).
2. No backend, no database, no server-side form processing.
3. Keep dependencies minimal.
4. Keep components readable and simple.
5. Avoid unnecessary abstractions.
6. Keep copy transparent and legally safe.

## 10) Deployment Model

Primary runtime target:

1. Build static site using Astro (`npm run build`).
2. Deploy `dist/` directly to **Cloudflare Pages**.
3. Legacy Docker build and nginx configs are preserved but secondary.

## 11) Content Editing Rules

When editing copy:

1. Keep sentences direct and factual.
2. Prefer explicit current-state disclosure over marketing language.
3. Link provider references when useful for transparency.
4. Keep roadmap statements conditional and realistic.
5. Avoid claims that imply capabilities not currently controlled by Leter.

## 12) Change Checklist for AI Agents

Before final response, verify:

1. No prohibited security claims were introduced.
2. Provider wording remains correct.
3. [Lewsion](https://lewsion.com)-only infrastructure credit is preserved.
4. Legal links still resolve (`/terms`, `/privacy`, `/abuse`, `/dmca`).
5. Homepage structure remains coherent and minimal.
6. No accidental stack drift (still Astro + Tailwind + static + Docker + nginx).

## 13) Launch-Ready Bias

Default behavior for AI agents:

1. Keep progress incremental.
2. Do one focused change set at a time.
3. Ask for plan approval first when changes are broad or legal-sensitive.
4. Prefer safe wording over speculative claims.
5. Preserve a clear upgrade path for future sovereign stack evolution.

## 14) Long-Term Memory Maintenance (Required)

`GEMINI.md` is the persistent memory anchor for this repository.  
Any major change must update this file in the same branch/PR.

Mandatory update triggers:

1. Directory structure changes (new/moved/deleted folders or key files).
2. Stack or version changes (Astro, Tailwind, Docker/runtime, build commands).
3. Architecture or deployment flow changes (Coolify, reverse proxy, security boundaries).
4. Product/directive changes (positioning, roadmap direction, provider model).
5. Legal/policy workflow changes (new drafting process, legal contacts, compliance constraints).

When triggered, update these parts in `GEMINI.md`:

1. "Project Identity" and "Non-Negotiable Product Truths" if facts changed.
2. "Repository Structure and Purpose" if files/folders changed.
3. "Engineering Constraints" and "Deployment Model" if tooling/runtime changed.
4. "Mandatory Plan-and-Approval Workflow" and legal gate rules if process changed.

Rule: no major merge is complete until `GEMINI.md` reflects the new reality.
