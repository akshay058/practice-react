import React, { useEffect } from "react";
import { useState } from "react";

export default function useTheme() {
  const [theme, SetTheme] = useState("light");
  const onThemeHandler = () => {
    theme === "light" ? SetTheme("dark") : SetTheme("light");
  };
  return {
    theme,
    onThemeHandler,
  };
}

export const useFetch = (url, filter) => {
  const [data, setData] = useState([]);

  const fetchData = async () => {
    const res = await fetch(`${url}/${filter}`);
    const data = await res.json();
    setData(filter === "products" ? data.products : data.users);
  };
  useEffect(() => {
    fetchData();
  }, [url, filter]);
  return { data };
};
