"use client";
import React, { CSSProperties } from "react";
import { Input, Button, Flex, Layout } from "antd";
import Image from "next/image";
import { LeftOutlined } from "@ant-design/icons";
import { useRouter } from "next/navigation";

const layoutStyle: CSSProperties = {
  borderRadius: 8,
  overflow: "hidden",
  textAlign: "center",
};
const headerStyle: React.CSSProperties = {
  display: "flex",
  height: "60px",
  alignItems: "center",
  color: "#fff",
  marginBottom: "20px",
  backgroundColor: "transparent",
};

const prevBtnStyle: CSSProperties = {
  position: "absolute",
  top: "40px",
  left: "30px",
  backgroundColor: "transparent",
  border: "none",
  transform: "translate3d(-50%,-50%,0)",
};
const logoStyle: CSSProperties = {
  marginTop: "30vh",
  position: "relative",
  margin: "0 auto",
};

function Register() {
  const { Header } = Layout;
  const router = useRouter();
  const handleClick = () => {
    router.back();
  };
  const loginGoogle = async () => {
    await fetch("/auth/callback/google", { method: "POST" });
  };
  return (
    <Layout style={layoutStyle}>
      <Header style={headerStyle}>
        <Button
          icon={<LeftOutlined />}
          style={prevBtnStyle}
          onClick={handleClick}
        />
      </Header>
      <Image
        src="/images/company_logo.png"
        alt="로고"
        style={logoStyle}
        width={100}
        height={60}
      />
      <Flex vertical justify="center" gap="middle" style={{ height: "100%" }}>
        <Input placeholder="Id" />
        <Input placeholder="Password" />
        <Button style={{ width: "100%" }} type="primary">
          Log in
        </Button>
        <Button style={{ width: "100%" }} type="primary" onClick={loginGoogle}>
          Log in With Google
        </Button>
      </Flex>
    </Layout>
  );
}

export default Register;
