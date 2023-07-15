"use client";

import Image from "next/image";
import { useSphere } from "@spherelabs/react";
import { WalletDisconnectButton, WalletMultiButton } from "@solana/wallet-adapter-react-ui";

export const styles = {
  main: "flex min-h-screen flex-col gap-y-4 p-24",
  button: "items-center w-[250px] bg-indigo-600 px-4 py-3 text-center text-sm font-semibold inline-block text-white cursor-pointer uppercase transition duration-200 ease-in-out rounded-md hover:bg-indigo-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-600 focus-visible:ring-offset-2 active:scale-95",
  subtotal: "text-[#0F2A43]"
}


export default function Home() {
  const { setLineItemQuantity, lineItems, pay, subtotal, discount } = useSphere();

  console.log({
    lineItems,
    subtotal,
    discount,
  });

  return (
    <main className={styles.main}>
      <WalletMultiButton />
      <div className={styles.subtotal}>
        Currency: {lineItems && lineItems[0]?.price?.currency}
      </div>
      <div className={styles.subtotal}>
        LineItems: <br/>{lineItems && lineItems.map((lineItem) => {
          return (<div key={lineItem.id}>{lineItem.id}</div>)
        })}
      </div>
      <div className={styles.subtotal}>
        Tax: {subtotal?.totalTaxFormatted}
      </div>
      <div className={styles.subtotal}>
       Fees : {subtotal?.totalFeeFormatted}
      </div>
      <div className={styles.subtotal}>
        Total: {subtotal?.rawAmountWithTaxAndFeesFormatted}
      </div>
      <button
        onClick={pay}
        className={styles.button}
      >
        Pay
      </button>
    </main>
  );
}
