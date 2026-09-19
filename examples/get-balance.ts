import { Connection, PublicKey } from "@solana/web3.js";
import {
  getAccount,
  getAssociatedTokenAddress,
  getMint,
} from "@solana/spl-token";

const connection = new Connection(
  "https://api.mainnet-beta.solana.com",
  "confirmed"
);

function getRlfMint(): PublicKey {
  const address = process.env.RLF_MINT_ADDRESS;

  if (!address) {
    throw new Error(
      "RLF_MINT_ADDRESS is missing. Use the verified RLF mint after official deployment."
    );
  }

  return new PublicKey(address);
}

export async function getRlfBalance(wallet: PublicKey): Promise<number> {
  const mint = getRlfMint();
  const tokenAccount = await getAssociatedTokenAddress(mint, wallet);
  const account = await getAccount(connection, tokenAccount);
  const mintInfo = await getMint(connection, mint);

  return Number(account.amount) / 10 ** mintInfo.decimals;
}
