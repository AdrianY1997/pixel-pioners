"use client";

import { SessionProvider } from "next-auth/react";
import "../../public/css/tailwind.compiled.css";
import { ToastProvider } from "@/components/providers/toastProvider";

export default function RootLayout({ children }) {
  return (
    <>
      <html>
        <SessionProvider>
          <body className="flex bg-gray-100 min-h-screen">{children}</body>
        </SessionProvider>
        <ToastProvider />
      </html>
    </>
  );
}
