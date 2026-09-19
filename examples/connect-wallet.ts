interface BrowserWalletProvider {
  isConnected?: boolean;
  publicKey?: { toString(): string };
  connect(): Promise<{ publicKey: { toString(): string } }>;
}

declare global {
  interface Window {
    solana?: BrowserWalletProvider;
  }
}

export async function connectWallet(): Promise<string> {
  const provider = window.solana;

  if (!provider) {
    throw new Error(
      "No compatible Solana wallet provider was found in this browser."
    );
  }

  const response = await provider.connect();
  return response.publicKey.toString();
}
