"use client";

import React, { useCallback, useRef, useState } from "react";
import { Input } from "antd";
import { SearchOutlined } from "@ant-design/icons";

function SearchInput() {
  const [term, setTerm] = useState<string>("");
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTerm(e.target.value);
  };

  let timeoutId = useRef<NodeJS.Timeout | null>(null);
  const debounce = useCallback((callback: (args: any) => void, delay = 300) => {
    return () => {
      if (timeoutId.current) {
        clearTimeout(timeoutId.current);
      }
      timeoutId.current = setTimeout(callback, delay);
    };
  }, []);
  return (
    <>
      <Input
        prefix={<SearchOutlined />}
        value={term}
        onChange={debounce(handleChange)}
        size="large"
        placeholder="Search"
      />
      {term}
    </>
  );
}

export default SearchInput;
