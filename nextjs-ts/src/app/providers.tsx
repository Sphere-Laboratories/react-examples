"use client";

import "./globals.css";
import {
  ConnectionProvider,
  WalletProvider,
} from "@solana/wallet-adapter-react";
import { WalletModalProvider } from "@solana/wallet-adapter-react-ui";
import { SphereProvider } from "@spherelabs/react";

require("@solana/wallet-adapter-react-ui/styles.css");

export default function Providers({ children }: { children: React.ReactNode }) {
  const endpoint =
    "https://rpc.helius.xyz/?api-key=5b61f350-4c99-4f81-8331-246906ba53dc";

  return (
    <ConnectionProvider endpoint={endpoint}>
      <WalletProvider wallets={[]} autoConnect>
        <WalletModalProvider>
          <SphereProvider paymentLinkId="paymentLink_118ebd81816b44508e031f0be93ab3c0">
            {children}
          </SphereProvider>
        </WalletModalProvider>
      </WalletProvider>
    </ConnectionProvider>
  );
}
