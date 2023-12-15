"use client";
import React, { useState } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { AppStateContextProvider } from "@/contexts/AppStateContext";

export default function Providers({ children }) {
  const [city, setCity] = useState("");

  const [queryClient] = useState(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: {
            staleTime: 60 * 1000,
          },
        },
      }),
  );

  return (
    <AppStateContextProvider value={{ city, setCity }}>
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    </AppStateContextProvider>
  );
}
