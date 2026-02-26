# Contributing

Thanks for considering a contribution to leter.net!

## Scope

This repository currently accepts contributions for:

1. **Site improvements** — copy, styling, accessibility, or documentation fixes that fit within the [design direction](GEMINI.md).
2. **Legal and Policy updates** — refining the terms, privacy policy, abuse handling, and DMCA pages.

> **Note on Web Key Directory (WKD)**: We previously accepted OpenPGP public keys via Pull Request. WKD key discovery has now been formally delegated to [keys.openpgp.org](https://keys.openpgp.org). For key management, please use their portal directly. We no longer merge OpenPGP public keys to this repository.

## Site Improvement Guidelines

1. **Keep changes minimal and focused:** Ensure your Pull Request addresses a single logical issue or feature.
2. **Preserve legal-safe copy:**
   - Do not claim currently deployed self-hosted end-to-end encryption.
   - Keep the current Forward Email routing disclosure intact unless the underlying infrastructure formally changes.
3. **No dynamic processing:** Do not add backend services, databases, or form processors. The site must remain purely static.
4. **Maintain visual aesthetics:** Keep styling consistent with the dark, minimal design language. Avoid heavy gradients or noisy animations (refer to `GEMINI.md` for specific design directions and accent colors).

## Local Development Workflow

To verify your changes before opening a PR:

```bash
npm ci            # Install dependencies cleanly
npm run dev       # Start the local development server at http://localhost:4321
npm run build     # Verify that the production build completes successfully
npm run preview   # Preview the production build locally
```

## Pull Request Process

1. **Fork the repository** and create your feature branch: `git checkout -b feature/my-new-feature`
2. **Commit your changes**: Provide clear, descriptive commit messages. Describe *what* changed and *why*.
3. **Push to your fork** and open a Pull Request against the `main` branch.
4. **Include screenshots** for any UI or layout changes to assist with the review process.

We will review your PR and provide feedback. Ensure all automated validation steps (if any) pass successfully.
