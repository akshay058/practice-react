import React from "react";
import useTheme from "./CustomHook/CustomerHook";

export default function ThemeToggle() {
  const { theme, onThemeHandler } = useTheme();
  console.log(theme);
  return (
    <div className="d-flex flex-column justify-content-center align-items-center">
      <div className="mt-4" onClick={onThemeHandler}>
        {theme === "dark" ? (
          <div className="btn btn-warning">
            <i class="fa-solid fa-sun"></i>
          </div>
        ) : (
          <i className="fa-solid fa-moon"></i>
        )}
      </div>
      <div
        className="text-box mt-2"
        style={{
          backgroundColor: theme === "dark" ? "black" : "pink",
          color: theme === "dark" ? "red" : "blue",
          height: "10rem",
          width: "30rem",
        }}
      >
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Est veniam,
        numquam asperiores necessitatibus delectus, repellat molestias eos
        temporibus, debitis quaerat ex eum ab consequuntur dicta eaque. Tenetur
        blanditiis vitae aliquid.
      </div>
    </div>
  );
}
