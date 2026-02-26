# leter.net

> Private, encryption-first email initiative landing page.

This repository contains the source code for the public-facing static landing site of `leter.net`.
Currently operating as an invite-only and internal-first service, leter.net serves as the public foundation for a high-trust communication domain.

## Overview

leter.net is operated as a strict invite-only domain for high-trust communication use cases. This repository acts as the public-facing documentation and trust anchor for the domain, providing visibility into our operational status, security controls, and accountability paths.

### Current Operating Model

- **Infrastructure Management**: Server deployment and operational infrastructure are provided by [Lewsion](https://lewsion.com).
- **Domain & DNS**: Registration is managed via [SpaceShip](https://www.spaceship.com), with DNS and active security policies orchestrated through [Cloudflare](https://www.cloudflare.com).
- **Mail Routing**: Mail routing and current mailbox provisioning are powered by [Forward Email](https://forwardemail.net), utilizing a zero-knowledge architecture. Leter does not handle mailbox-level storage directly.
- **Web Key Directory (WKD)**: OpenPGP public key discovery is delegated to [keys.openpgp.org](https://keys.openpgp.org) to facilitate seamless end-to-end encrypted communication for external senders.

## Technology Stack

The landing page is engineered for speed, simplicity, and security:

- **Framework**: [Astro](https://astro.build/) (Static Site Generation)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Deployment**: [Cloudflare Pages](https://pages.cloudflare.com/) (Primary Edge)
- **Containerization**: Docker (Multi-stage build with Nginx Alpine)

## Local Development

To contribute or run the project locally, ensure you have Node.js 20 LTS installed.

### 1. Installation

Clone the repository and install dependencies:

```bash
git clone https://github.com/Lewsion/leter.net.git
cd leter.net
npm install
```

*(Note: If `package-lock.json` is present, prefer `npm ci` for a clean install).*

### 2. Development Server

Start the Astro development server:

```bash
npm run dev
```

The site will be available at [http://localhost:4321](http://localhost:4321).

### 3. Build and Preview

Generate a production-ready static build:

```bash
npm run build
```

Preview the statically generated site locally:

```bash
npm run preview
```

## Docker Deployment (Legacy / Alternative)

While primary deployment executes automatically to Cloudflare Pages, a production-ready `Dockerfile` is provided for standard server deployments (e.g., via Coolify).

### Build

```bash
docker build -t leter-net:latest .
```

### Run

```bash
docker run --rm -p 8080:80 leter-net:latest
```

Open `http://localhost:8080`.

**Note**: The Docker image relies on an Nginx Alpine container serving static assets on port `80`. TLS termination and reverse proxying must be handled externally by your infrastructure.

## Legal & Compliance

The repository includes templates for our critical legal and policy documents:

- `/terms` - Terms of Service
- `/privacy` - Privacy Policy
- `/abuse` - Abuse Policy
- `/dmca` - DMCA Policy

## Contributing

We welcome contributions to improve the site's layout, copy, accessibility, and documentation. Please review our [Contributing Guidelines](CONTRIBUTING.md) before submitting a Pull Request. *(Note: We no longer accept OpenPGP WKD keys via Pull Requests).*

---
*Server deployment and operational infrastructure provided by [Lewsion](https://lewsion.com).*
