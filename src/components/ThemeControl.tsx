"use client";

import { useEffect, useState } from "react";
import { FaMoon } from "react-icons/fa";
import { IoIosSunny } from "react-icons/io";

const ThemeControl = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const savedTheme = localStorage.getItem("theme");
      if (savedTheme) {
        setDarkMode(JSON.parse(savedTheme));
      }
      setMounted(true);
    }
  }, []);

  useEffect(() => {
    if (!mounted) return;
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    localStorage.setItem("theme", JSON.stringify(darkMode));
  }, [darkMode, mounted]);

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
