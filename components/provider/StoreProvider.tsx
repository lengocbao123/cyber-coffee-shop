"use client";
import { RootStore } from "@/store";
import { ReactNode, createContext, useContext } from "react";
export const StoreContext = createContext<RootStore | null>(null);

export function useStore() {
  const context = useContext(StoreContext);
  if (context === undefined) {
    throw new Error("useStore must be used within StoreProvider");
  }

  return context;
}
export function StoreProvider({ children }: { children: ReactNode }) {

  const store = new RootStore([]);
  return (
    <StoreContext.Provider value={store}>{children}</StoreContext.Provider>
  );
}
