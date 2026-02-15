# leter.net

Private, encryption-first email initiative landing page.

This repository contains a static landing site for `leter.net`, currently invite-only and internal-first.

## Current Positioning

- Mail routing and current mailbox provisioning use [Forward Email](https://forwardemail.net) (zero-knowledge provider).
- Leter does not currently operate mailbox-level storage directly.
- No claim is made that self-hosted end-to-end encryption is currently deployed.
- Roadmap targets a sovereign, self-hosted encrypted infrastructure.
- Infrastructure is operated by [Lewsion](https://lewsion.com).

## Stack

- Astro (static site generator)
- Tailwind CSS
- Docker (multi-stage build)
- Nginx Alpine runtime on port `80`

## Local Development

### 1) Install Node.js

Install Node.js 20 LTS:
- Windows (recommended): `winget install OpenJS.NodeJS.LTS`
- Or download from https://nodejs.org/

Verify:

```bash
node -v
npm -v
```

### 2) Install dependencies

First time in a new clone (no lockfile yet):

```bash
npm install
```

After `package-lock.json` exists, you can use:

```bash
npm ci
```

### 3) Run dev server

```bash
npm run dev
```

Open this URL in your browser:

`http://localhost:4321`

### 4) Production build

```bash
npm run build
```

### 5) Preview production build

```bash
npm run preview
```

Open this URL in your browser:

`http://localhost:4321`

## Docker

Build image:

```bash
docker build -t leter-net:latest .
```

Run container on local port `8080`:

```bash
docker run --rm -p 8080:80 leter-net:latest
```

Then open `http://localhost:8080`.

Deployment note:

- Reverse proxy, TLS, and edge security are expected to be handled externally (for example via Coolify).
- The container serves static files on port `80` only.

### Coolify alignment

- Build Type: Dockerfile
- Dockerfile path: `./Dockerfile`
- Exposed/Container port: `80`
- No internal TLS config in container (Coolify handles TLS/proxy externally)
- No custom start command needed (Dockerfile already runs nginx)

## VS Code Workflow

Recommended extensions:

- `astro-build.astro-vscode`
- `bradlc.vscode-tailwindcss`
- `esbenp.prettier-vscode`

Suggested local flow before pushing:

1. `npm ci`
2. `npm run dev` and verify content/copy in browser
3. `npm run build`
4. `npm run preview`
5. `docker build -t leter-net:latest .`
6. `docker run --rm -p 8080:80 leter-net:latest`

## Legal Pages

Current legal and policy routes:

- `/terms`
- `/privacy`
- `/abuse`
- `/dmca`

Infrastructure credit line:

`Server deployment and operational infrastructure provided by [Lewsion](https://lewsion.com).`
