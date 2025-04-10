"use client";

import { useEffect, useState } from "react";
import { FaMoon } from "react-icons/fa";
import { IoIosSunny } from "react-icons/io";

const ThemeControl = () => {
  const [darkMode, SetDarkMode] = useState(false);

  useEffect(() => {
    const theme = localStorage.getItem("theme");
    if (theme) {
      SetDarkMode(JSON.parse(theme));
    } else {
      SetDarkMode(false);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("theme", JSON.stringify(darkMode));
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  const handleChange = () => {
    SetDarkMode((prev) => !prev);
  };
  return (
    <div className="absolute top-5 right-5">
      {darkMode ? (
        <button
          type="button"
          className={`cursor-pointer text-white`}
          onClick={handleChange}
        >
          <IoIosSunny className="text-2xl" />
        </button>
      ) : (
        <button
          type="button"
          className={`cursor-pointer text-white`}
          onClick={handleChange}
        >
          <FaMoon className="text-xl" />
        </button>
      )}
    </div>
  );
};

export default ThemeControl;
