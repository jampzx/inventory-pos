import type { Metadata } from "next";
import { Fraunces, IBM_Plex_Sans } from "next/font/google";
import "./globals.css";
import { Toaster } from "sonner";
import { PermissionProvider } from "@/context/PermissionContext";

const display = Fraunces({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-display",
});

const body = IBM_Plex_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-body",
});

export const metadata: Metadata = {
  title: "JA POS Management System",
  description: "Point of Sale Management System",
  icons: {
    icon: "/logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${display.variable} ${body.variable} antialiased`}>
        <PermissionProvider>
          {children}
          <Toaster richColors position="top-center" />
        </PermissionProvider>
      </body>
    </html>
  );
}
