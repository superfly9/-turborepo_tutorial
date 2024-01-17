"use client";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { AntdRegistry } from "@ant-design/nextjs-registry";
import Footer from "components/Footer";
import { SessionProvider } from "next-auth/react";

const inter = Inter({ subsets: ["latin"] });

const metadata: Metadata = {
  title: "Instagram",
  description: "Practice For Turbo",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}): JSX.Element {
  return (
    <>
      <html>
        <body>
          <AntdRegistry>
            <SessionProvider>
              <div className="layout_container">{children}</div>
            </SessionProvider>
            <Footer />
          </AntdRegistry>
        </body>
      </html>
    </>
  );
}
