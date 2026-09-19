# Getting Started

This guide shows the basic path for building with RLF on Solana.

## 1. Requirements

You need:

- Node.js
- npm
- a Solana-compatible wallet for browser projects
- `@solana/web3.js`
- `@solana/spl-token`

Install the libraries:

```bash
npm install @solana/web3.js @solana/spl-token
```

## 2. Configure the RLF mint address

The verified RLF mint address will be published after official deployment.

Do not hard-code a guessed address.

Set it as an environment variable instead.

### PowerShell

```powershell
$env:RLF_MINT_ADDRESS="PASTE_VERIFIED_ADDRESS_HERE"
```

### macOS / Linux

```bash
export RLF_MINT_ADDRESS="PASTE_VERIFIED_ADDRESS_HERE"
```

## 3. Connect to Solana

```ts
import { Connection } from "@solana/web3.js";

const connection = new Connection(
  "https://api.mainnet-beta.solana.com",
  "confirmed"
);
```

For production applications, consider using a dedicated RPC provider instead of relying only on the public endpoint.

## 4. Try the examples

- `examples/get-balance.ts` reads an RLF token balance for a wallet.
- `examples/connect-wallet.ts` shows a minimal browser-wallet connection pattern.
- `examples/token-info.ts` reads SPL mint information from Solana.

## 5. Verify before trusting

Before using RLF data in a real application, verify the mint address against the official RLF website and a Solana explorer.

The repository will be updated when the official mint is available.
