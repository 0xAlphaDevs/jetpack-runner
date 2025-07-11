"use client";
import dynamic from "next/dynamic";
const AppWithoutSSR = dynamic(() => import("@/components/main-app"), {
  ssr: false,
});

export default function Home() {
  return (
    <div className="bg-black">
      <AppWithoutSSR />
    </div>
  );
}
