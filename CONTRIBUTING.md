# Contributing

Thanks for considering a contribution.

## Scope

This repository accepts two types of contributions:

1. **WKD key submissions** — uploading your OpenPGP public key for `@leter.net` discovery.
2. **Site improvements** — copy, styling, accessibility, or documentation fixes that fit within the [design direction](GEMINI.md).

---

## Submitting your OpenPGP public key (WKD)

leter.net supports [Web Key Directory (WKD)](https://leter.net/wkd) for automatic OpenPGP key
discovery. If you are an active leter.net user, you can publish your public key via a Pull Request.

### Requirements

- You must have an active `@leter.net` email address.
- The file must be your **binary** OpenPGP public key — not ASCII-armored.
- The filename must be the correct **WKD hash** for your local-part.

### Step-by-step

1. **Export your public key** (binary, not armored):

   ```bash
   gpg --export you@leter.net > pubkey.pgp
   ```

2. **Compute your WKD hash** — use the tool at [leter.net/wkd](https://leter.net/wkd) or
   any WKD hash calculator. The hash is the z-base-32 encoded SHA-1 of the lowercased local-part.

3. **Rename your file** to the bare hash (no extension):

   ```
   qqkkt7j9hg17a8a9ykbdh9fepq5cqh7d   ← example; use yours
   ```

4. **Open a Pull Request**:
   - Go to your fork and upload the renamed file to:
     `public/.well-known/openpgpkey/hu/`
   - Or use the **Upload key via GitHub PR** button at [leter.net/wkd](https://leter.net/wkd)
     which opens GitHub's upload UI at the correct path.

5. **Use the key submission PR template** — fill in the fields in the PR description (see below).

### PR description template

When you open the PR, fill in this template in the PR body:

```
## WKD key submission

- **Email address:** you@leter.net
- **Key fingerprint:** (run `gpg --fingerprint you@leter.net`)
- **WKD hash:** (shown at leter.net/wkd)
- **Key created:** (date)
- **Algorithm:** (e.g. Ed25519, RSA-4096)

### Checklist
- [ ] File is binary (not ASCII-armored) — verified with `file pubkey.pgp` showing "OpenPGP Public Key"
- [ ] Filename matches the WKD hash exactly (no extension)
- [ ] File is placed at `public/.well-known/openpgpkey/hu/<hash>`
- [ ] I am the holder of the corresponding private key
```

### After merge

Once merged and deployed, your key is automatically discoverable by Proton Mail, Tuta, Thunderbird,
GPG Suite, Sequoia PGP, Delta Chat, and any other WKD-supporting client — they will encrypt to you
automatically from that point on.

---

## Site improvement guidelines

1. Keep changes minimal and focused.
2. Preserve legal-safe copy:
   - Do not claim currently deployed self-hosted end-to-end encryption.
   - Keep current Forward Email routing disclosure intact unless infrastructure changes.
3. Do not add backend services, databases, or form processors.
4. Keep styling consistent with the dark minimal design (see `GEMINI.md` §6).

## Local development

```bash
npm ci
npm run dev       # http://localhost:4321
npm run build     # verify production build works
npm run preview   # preview production build
```

## Pull Requests (general)

- Use clear, descriptive commit messages.
- Describe what changed and why.
- Include screenshots for any UI changes.
