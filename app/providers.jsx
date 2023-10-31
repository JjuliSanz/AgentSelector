"use client";

import { NextUIProvider } from "@nextui-org/react";
import { StateContextProvider } from "@/context/StateContext";

export function Providers({ children }) {
  return (
    <NextUIProvider>
      <StateContextProvider>{children}</StateContextProvider>
    </NextUIProvider>
  );
}
