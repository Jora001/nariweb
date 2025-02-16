"use client";
import { useState } from "react";
import { NAVIGATION } from "@/constants";
import NavItem from "../nav_item";
import Logo from "../logo";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.header
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="mt-4"
    >
      <nav className="flex items-center justify-between px-6 py-4">
        {/* Logo */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="ml-10"
        >
          <Logo />
        </motion.div>

        {/* Desktop Navbar */}
        <motion.div 
          className="hidden md:flex items-center gap-10 mr-20"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
        >
          {NAVIGATION.map((nav) => (
            <NavItem href={nav.href} label={nav.label} key={nav.href} />
          ))}
        </motion.div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden block text-gray-800"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </nav>

      {/* Mobile Menu with Animation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="md:hidden flex flex-col items-center bg-white shadow-md absolute w-full py-4"
          >
            {NAVIGATION.map((nav) => (
              <NavItem
                href={nav.href}
                label={nav.label}
                key={nav.href}
                onClick={() => setIsOpen(false)}
              />
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
