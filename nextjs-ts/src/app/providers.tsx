"use client";

import "./globals.css";
import { useMemo } from "react";
import { clusterApiUrl } from "@solana/web3.js";
import {
  ConnectionProvider,
  WalletProvider,
} from "@solana/wallet-adapter-react";
import { WalletAdapterNetwork } from "@solana/wallet-adapter-base";
import {
  WalletModalProvider,
} from "@solana/wallet-adapter-react-ui";
import { SphereProvider } from "@spherelabs/react";

require("@solana/wallet-adapter-react-ui/styles.css");

export default function Providers({ children }: { children: React.ReactNode }) {
  const endpoint = "https://rpc.helius.xyz/?api-key=5b61f350-4c99-4f81-8331-246906ba53dc;"

  return (
    <html lang="en">
      <ConnectionProvider endpoint={endpoint}>
        <WalletProvider wallets={[]} autoConnect>
          <WalletModalProvider>
            <SphereProvider
              paymentLinkId="paymentLink_0b603ecd8b3d4b5e819076cfc7618cc8"
              apiOrigin="https://api.staging.spherepay.co"
              
            >
              <body>{children}</body>
            </SphereProvider>
          </WalletModalProvider>
        </WalletProvider>
      </ConnectionProvider>
    </html>
  );
}
