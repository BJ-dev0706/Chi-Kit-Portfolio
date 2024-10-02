"use client";

import Link from "next/link";
import React from "react";
import ThemeToggle from "./ThemeToggle";
import { motion } from "framer-motion";

const variants = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 },
    },
  },
  closed: {
    y: 50,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 },
    },
  },
};

const Menu = ["", "about", "education", "experience", "project", "contact"];

const Header: React.FC = () => {
  return (
    <header className="dark:bg-dark bg-white py-5 w-full flex items-center justify-around">
      <div></div>
      <ul className="dark:text-white text-dark flex gap-5 justify-center items-center">
        {Menu.map((item) => (
          <motion.li
            variants={variants}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            key={item}
            className="Navbar-btn dark:after:bg-white after:bg-dark dark:before:bg-white before:bg-dark"
          >
            <Link href={`/${item}`}>
              <span className="">{item === "" ? "home" : item}</span>
            </Link>
          </motion.li>
        ))}
        <ThemeToggle />
      </ul>
    </header>
  );
};

export default Header;
