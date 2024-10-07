"use client";

// import Link from "next/link";
import React, {useTransition} from "react";
import ThemeToggle from "./ThemeToggle";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";

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
  const router = useRouter();
  const [isPending, startTransition] = useTransition();

  const navigation = (path:string) => {
    startTransition(() => {
      router.push(path);
    });
  }
  
  console.log(isPending);
  

  return (
    <header className="dark:bg-dark bg-white py-5 w-full flex items-center justify-around absolute top-0 left-0 right-0 z-50 shadow-md dark:shadow-white">
      <div className="">
        
      </div>
      <ul className="dark:text-white text-dark flex gap-5 justify-center items-center max-md:hidden">
        {Menu.map((item) => (
          <motion.li
            variants={variants}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            key={item}
            className="Navbar-btn dark:after:bg-white after:bg-dark dark:before:bg-white before:bg-dark"
          >
            <button onClick={() => navigation(item)}  aria-label={`Go to ${item === "" ? "home" : item}`}>
              <span className="first-letter:uppercase">{item === "" ? "home" : item}</span>
            </button>
          </motion.li>
        ))}
        <ThemeToggle />
      </ul>
    </header>
  );
};

export default Header;
