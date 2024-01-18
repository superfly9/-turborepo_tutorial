"use client";
import React, { useState } from "react";
import { Input } from "antd";
import { SearchOutlined } from "@ant-design/icons";
import useDebounce from "@/hook/useDebounce";

function SearchInput() {
  const [term, setTerm] = useState<string>("");
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTerm(e.target.value);
  };
  const debounce = useDebounce();
  const searchTermChangeWithDebounce = debounce(handleChange);
  return (
    <>
      <Input
        prefix={<SearchOutlined />}
        onChange={searchTermChangeWithDebounce}
        size="large"
        placeholder="Search"
      />
      {term}
    </>
  );
}

export default SearchInput;
