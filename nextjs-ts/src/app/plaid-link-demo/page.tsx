"use client";

import { useSpherePlaid } from "@spherelabs/react-plaid";
import { useEffect } from "react";

export default function Test() {
  const { connectBankAccount, isReady, error, isLoading } = useSpherePlaid({
    token:
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJjdXN0b21lcl8yZjgyODJhMmQ2M2Y0OTVjODI2YzgyODhlZDVhYzI5NCIsImFwcGxpY2F0aW9uSWQiOiJhcHBsaWNhdGlvbl9hYjAyYjlkOWNiZmE0YzExOTUyNzEzMjQ2NTAwNjNiMSIsIm1vY2siOmZhbHNlLCJpYXQiOjE3MDc0NzI1OTAsImV4cCI6MTcwNzQ3NjE5MH0.KO1box0nzLMqTEObJ6qr_V5wSY_RyNCh9gaaJs_EGDA",
    onSuccess: (plaidPublicToken, plaidMetadata, sphereBankAccountIds) => {
      console.log("onSuccess");
      console.log({ plaidPublicToken, plaidMetadata, sphereBankAccountIds });
    },
  });

  console.log({ isReady, isLoading });
  useEffect(
    function handleError() {
      if (error) {
        window.alert(error);
      }
    },
    [error]
  );

  return (
    <div>
      <button disabled={!isReady || isLoading} onClick={connectBankAccount}>
        Connect Bank Account via Plaid
      </button>
    </div>
  );
}
