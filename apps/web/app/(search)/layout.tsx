"use client";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { AntdRegistry } from "@ant-design/nextjs-registry";
import Footer from "components/Footer";
import { SessionProvider } from "next-auth/react";
import { Suspense } from "react";

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
      <AntdRegistry>
        <SessionProvider>
          <Suspense
            fallback={
              <div
                style={{
                  backgroundColor: "rebeccapurple",
                  width: "100vw",
                  height: "100vh",
                }}
              >
                Loading
              </div>
            }
          >
            <div className="layout_container">{children}</div>
          </Suspense>
        </SessionProvider>
        <Footer />
      </AntdRegistry>
    </>
  );
}
