
import { Toaster } from "react-hot-toast";
import "./globals.css";
// import { AppProvider } from "@/contexts/AppContext";
// import { sequenceConfig } from "@/lib/config";
// import { SequenceConnect } from "@0xsequence/connect";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Jetpack Runner",
  description: "Retro Style 2-D onchain runner game ",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      {/* <SequenceConnect config={sequenceConfig}>
        <AppProvider> */}
      <body>
        <main>{children}</main>
        <Toaster />
      </body>
      {/* </AppProvider> */}
      {/* </SequenceConnect> */}
    </html>
  );
}
