"use client";

import React, { useState } from "react";
import { Input } from "antd";
import { SearchOutlined } from "@ant-design/icons";

function SearchInput() {
  const [term, setTerm] = useState<string>("");
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTerm(e.target.value);
  };
  return (
    <>
      <Input
        prefix={<SearchOutlined />}
        value={term}
        onChange={handleChange}
        size="large"
        placeholder="Search"
      />
    </>
  );
}

export default SearchInput;
