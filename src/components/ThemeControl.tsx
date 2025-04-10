"use client";

import { useEffect, useState } from "react";
import { FaMoon } from "react-icons/fa";
import { IoIosSunny } from "react-icons/io";

const ThemeControl = () => {
  const [darkMode, setDarkMode] = useState<boolean>(() => {
    const savedTheme = localStorage.getItem("theme");
    return savedTheme ? JSON.parse(savedTheme) : false;
  });

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    localStorage.setItem("theme", JSON.stringify(darkMode));
  }, [darkMode]);

  const handleChange = () => {
    setDarkMode((prev) => !prev);
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
