"use client";

import Image from "next/image";
import { useSphere } from "@spherelabs/react";

export default function Home() {
  const { setLineItemQuantity, lineItems, pay, subtotal, discount } =
    useSphere();

  console.log({
    lineItems,
    subtotal,
    discount,
    pay,
  });

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <button onClick={pay}>Pay Button</button>
    </main>
  );
}
