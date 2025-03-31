"use client";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useRef } from "react";

export default function QueryProvider({ children }: { children: React.ReactNode }) {
  const queryClientRef = useRef(new QueryClient());

  return (
    <QueryClientProvider client={queryClientRef.current}>
      {children}
    </QueryClientProvider>
  );
}
