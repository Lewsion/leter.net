---
name: WKD Key Submission
about: Submit your OpenPGP public key for leter.net WKD discovery
title: "WKD: <your-hash>"
labels: wkd-key-submission
assignees: ''
---

## WKD key submission

<!-- Replace all placeholders with your actual values. -->

- **Email address:** `you@leter.net`
- **Key fingerprint:** <!-- run: gpg --fingerprint you@leter.net -->
- **WKD hash:** <!-- compute at: https://leter.net/wkd -->
- **Key created:** <!-- e.g. 2025-01-15 -->
- **Algorithm / size:** <!-- e.g. Ed25519, RSA-4096 -->

### Checklist

- [ ] File is in **binary** format (not ASCII-armored)
  - Verify: `file pubkey.pgp` should show _"OpenPGP Public Key"_
- [ ] Filename is the bare WKD hash — no extension (e.g. `qqkkt7j9hg17a8a9ykbdh9fepq5cqh7d`)
- [ ] File is placed at `public/.well-known/openpgpkey/hu/<hash>`
- [ ] I am the sole holder of the matching private key
- [ ] I am an active `@leter.net` user

---

> **Privacy note:** By submitting, you agree to have your public key hosted publicly at
> `https://leter.net/.well-known/openpgpkey/hu/<your-hash>` for OpenPGP key discovery.
> Your private key is never submitted or requested.
