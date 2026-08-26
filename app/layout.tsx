import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "AI Cinematic Videos for Real Estate, Luxury Brands, and High-Value Listings",
  description: "Turn your existing listing and inventory images into cinematic social videos, captions, and content campaigns for real estate, Airbnb listings, jets, yachts, exotic cars, RVs, and venues.",
  metadataBase: new URL("https://example.com"),
  openGraph: { title: "AI Cinematic Visuals", description: "Cinematic content for high-value listings, inventory, spaces, and experiences.", type: "website" }
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}