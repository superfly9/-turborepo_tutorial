"use client";
import "../global.css";
import type { Metadata } from "next";
import { AntdRegistry } from "@ant-design/nextjs-registry";
import Header from "components/Header";
import Footer from "components/Footer";
import { SessionProvider } from "next-auth/react";

const metadata: Metadata = {
  title: "Instagram",
  description: "Practice For Turbo",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Header />
      <SessionProvider>
        <div className="layout_container">{children}</div>
      </SessionProvider>
      <Footer />
    </>
  );
}
