import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Toaster } from "sonner";
import { PermissionProvider } from "@/context/PermissionContext";

const inter = Inter({ subsets: ["latin"] });

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
      <body className={inter.className}>
        <PermissionProvider>
          {children}
          <Toaster richColors position="top-center" />
        </PermissionProvider>
      </body>
    </html>
  );
}
