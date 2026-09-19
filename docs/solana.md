# Solana Integration

RLF is intended to use the standard Solana SPL token infrastructure.

## Core libraries

```bash
npm install @solana/web3.js @solana/spl-token
```

## Connection

```ts
import { Connection } from "@solana/web3.js";

export const connection = new Connection(
  "https://api.mainnet-beta.solana.com",
  "confirmed"
);
```

## Mint address

The repository intentionally does not contain a fake RLF mint address.

Applications should load the verified address from configuration:

```ts
import { PublicKey } from "@solana/web3.js";

const mintAddress = process.env.RLF_MINT_ADDRESS;

if (!mintAddress) {
  throw new Error("RLF_MINT_ADDRESS is not configured");
}

export const RLF_MINT = new PublicKey(mintAddress);
```

## Token amounts

SPL token accounts store token amounts as integers.

Do not assume a decimal count until the live RLF mint has been verified on-chain. Read the mint data and use its actual `decimals` value when converting raw amounts for display.

## RPC

The public Solana RPC endpoint is useful for examples and development, but production applications may need a dedicated RPC provider for better limits and reliability.

## Safety

Always verify:

1. the RLF mint address,
2. the network being used,
3. the token decimals,
4. the wallet address,
5. any transaction before signing.

Never request or store a user's seed phrase.
