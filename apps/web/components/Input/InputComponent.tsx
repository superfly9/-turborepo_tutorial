"use client";

import React, { useState } from "react";
import { Input } from "antd";

function InputComponent() {
  const [term, setTerm] = useState<string>("");
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTerm(e.target.value);
  };
  return (
    <>
      <Input
        value={term}
        onChange={handleChange}
        size="large"
        placeholder="Search"
      />
    </>
  );
}

export default InputComponent;
