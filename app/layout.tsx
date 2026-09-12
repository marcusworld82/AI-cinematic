import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "EMPOSSIBLE | Cinematic content for premium listings and experiences",
  description: "EMPOSSIBLE turns approved listing and inventory images into cinematic short-form video for premium homes, hospitality, vehicles, yachts, aviation, and venues.",
  metadataBase: new URL("https://ai-cinematic-aott.vercel.app"),
  openGraph: { title: "EMPOSSIBLE", description: "Cinematic content for premium listings, inventory, spaces, and experiences.", type: "website" }
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
