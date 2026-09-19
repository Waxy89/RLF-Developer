# RLF Developer

Developer resources, examples and documentation for **Real Life Fantasy (RLF)** on Solana.

> **Status:** Early development. The verified RLF mint address and final on-chain parameters will be published here after official deployment. No placeholder address in this repository should be treated as a live contract.

## Build with RLF

This repository is the starting point for developers who want to experiment with RLF integrations, tools, bots, games, analytics and web apps.

### Start here

- [Getting started](docs/getting-started.md)
- [Solana integration notes](docs/solana.md)
- [Read an RLF balance](examples/get-balance.ts)
- [Connect a browser wallet](examples/connect-wallet.ts)
- [Read token information](examples/token-info.ts)

## Network

| Item | Status |
| --- | --- |
| Blockchain | Solana |
| Token standard | SPL Token |
| Verified RLF mint | Published after official deployment |
| Developer SDK | Not released |
| Public API | Not released |

## Install the example dependencies

```bash
npm install @solana/web3.js @solana/spl-token
```

The examples read the mint address from the `RLF_MINT_ADDRESS` environment variable. This prevents a fake or placeholder address from looking like the live RLF token.

## Example ideas

Community developers may use RLF as part of projects such as:

- Telegram bots
- wallet tools
- web apps and widgets
- games and interactive experiences
- analytics dashboards
- community utilities

These are examples of what can be built. They are not claims that these products already exist.

## Project links

- RLF website: https://waxyverse.com
- GitHub: https://github.com/Waxy89/RLF-Developer
- Developer community: coming later

## Security

Never commit:

- private keys
- seed phrases
- wallet secrets
- API secrets
- Cloudflare credentials
- private RPC credentials

Keep secrets in environment variables or a proper secret manager.

## Contributing

The project is still being prepared for outside contributions. Contribution rules and issue templates can be added when the developer community opens.

## License

A project license has not yet been selected. Until one is added, normal copyright rules apply.
