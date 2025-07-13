"use client";
import { Toaster } from "react-hot-toast";
import "./globals.css";
import { AppProvider } from "@/contexts/AppContext";
import { sequenceConfig } from "@/lib/config";
import { SequenceConnect } from "@0xsequence/connect";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <SequenceConnect config={sequenceConfig}>
        <AppProvider>
          <body>
            <main>{children}</main>
            <Toaster />
          </body>
        </AppProvider>
      </SequenceConnect>
    </html>
  );
}
