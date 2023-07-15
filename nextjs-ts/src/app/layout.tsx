import './globals.css'
import { useMemo } from 'react'
import { clusterApiUrl } from "@solana/web3.js"
import { ConnectionProvider, WalletProvider } from '@solana/wallet-adapter-react';
import { WalletAdapterNetwork } from '@solana/wallet-adapter-base'
import { UnsafeBurnerWalletAdapter } from '@solana/wallet-adapter-wallets';
import {
  WalletModalProvider,
  WalletDisconnectButton,
  WalletMultiButton
} from '@solana/wallet-adapter-react-ui';

export default function RootLayout({children}: {
  children: React.ReactNode
}){
  const network = WalletAdapterNetwork.Mainnet;
  const endpoint = useMemo(() => clusterApiUrl(network), [network]);
  const wallets = useMemo(
      () => [
          new UnsafeBurnerWalletAdapter(),
      ],
      // eslint-disable-next-line react-hooks/exhaustive-deps
      [network]
  );

  return (
    <html lang="en">
      <ConnectionProvider endpoint={endpoint}>
          <WalletProvider wallets={wallets} autoConnect>
              <WalletModalProvider>
                  <WalletMultiButton />
                  <WalletDisconnectButton />
                    <body>{children}</body>
              </WalletModalProvider>
          </WalletProvider>
      </ConnectionProvider>
      </html>
  );
};
