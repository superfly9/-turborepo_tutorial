import React, { ReactNode } from "react";
import "./global.css";
import { Inter } from "next/font/google";
import { AntdRegistry } from "@ant-design/nextjs-registry";
import ModalProvider from "@/context/ModalContext/Provider";

const inter = Inter({ subsets: ["latin"] });

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
