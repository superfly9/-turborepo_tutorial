"use client";
import Image from "next/image";
import React, { ChangeEvent } from "react";
import { icon, companyLogo, messenger } from "../../public";

function Header() {
  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value, e.currentTarget.value);
  };
  return (
    <div>
      <Image src={icon} width={50} height={50} alt="인스타그램 로고" />
      <Image src={companyLogo} width={50} height={50} alt="인스타그램 회사" />
      <Image src={messenger} width={50} height={50} alt="디엠" />
      <input onChange={onChange} />
    </div>
  );
}

export default Header;
