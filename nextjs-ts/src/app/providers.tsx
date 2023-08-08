"use client";

import "./globals.css";
import {
  ConnectionProvider,
  WalletProvider,
} from "@solana/wallet-adapter-react";
import {
  WalletModalProvider,
} from "@solana/wallet-adapter-react-ui";
import { SphereProvider } from "@spherelabs/react";

require("@solana/wallet-adapter-react-ui/styles.css");

export default function Providers({ children }: { children: React.ReactNode }) {
  const endpoint = "https://rpc.helius.xyz/?api-key=5b61f350-4c99-4f81-8331-246906ba53dc"

  return (
    <html lang="en">
      <ConnectionProvider endpoint={endpoint}>
        <WalletProvider wallets={[]} autoConnect>
          <WalletModalProvider>
            <SphereProvider
              paymentLinkId="paymentLink_b0c354273df945c9a704201b38a7a171"
            >
              <body>{children}</body>
            </SphereProvider>
          </WalletModalProvider>
        </WalletProvider>
      </ConnectionProvider>
    </html>
  );
}
