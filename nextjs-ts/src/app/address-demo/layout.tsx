"use client";

import { SphereProvider } from "@spherelabs/react";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <SphereProvider paymentLinkId="paymentLink_5501b53971d2433eb9f09552b17e11a6">
      {children}
    </SphereProvider>
  );
}
