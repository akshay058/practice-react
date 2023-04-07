import React from "react";
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
