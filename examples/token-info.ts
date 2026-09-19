import { Connection, PublicKey } from "@solana/web3.js";
import { getMint } from "@solana/spl-token";

const connection = new Connection(
  "https://api.mainnet-beta.solana.com",
  "confirmed"
);

export async function getRlfTokenInfo() {
  const address = process.env.RLF_MINT_ADDRESS;

  if (!address) {
    throw new Error(
      "RLF_MINT_ADDRESS is missing. Use the verified RLF mint after official deployment."
    );
  }

  const mint = new PublicKey(address);
  const info = await getMint(connection, mint);

  return {
    address: mint.toBase58(),
    supplyRaw: info.supply.toString(),
    decimals: info.decimals,
    mintAuthority: info.mintAuthority?.toBase58() ?? null,
    freezeAuthority: info.freezeAuthority?.toBase58() ?? null,
  };
}
