"use client"
import { ReactNode } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

export function QueryProvider({ children }: { children: ReactNode }) {
    const queryClient = new QueryClient();

    return <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
}