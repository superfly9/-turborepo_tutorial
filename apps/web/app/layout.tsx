import React, { ReactNode } from "react";
import "./global.css";
import { Inter } from "next/font/google";
import { AntdRegistry } from "@ant-design/nextjs-registry";
import ModalProvider from "@/context/ModalContext/Provider";

const inter = Inter({ subsets: ["latin"] });

async function enableMocking() {
  console.log("[process.env.NODE_ENV]:", process.env.NODE_ENV);
  if (process.env.NODE_ENV !== "development") {
    return;
  }

  const isBrowser = typeof window !== "undefined";
  if (isBrowser) {
    const { worker } = await import("../mocks/browser");
    return worker.start();
  }
  return null;
}
enableMocking();

function layout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ModalProvider>
          <AntdRegistry>{children}</AntdRegistry>
        </ModalProvider>
      </body>
    </html>
  );
}

export default layout;
