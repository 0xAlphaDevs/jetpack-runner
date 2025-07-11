"use client";
import { Toaster } from "react-hot-toast";
import "./globals.css";
import { AppProvider } from "@/contexts/AppContext";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <AppProvider>
        <body>
          <main>{children}</main>
          <Toaster />
        </body>
      </AppProvider>
    </html>
  );
}
