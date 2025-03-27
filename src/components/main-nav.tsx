import { useEffect, useState } from "react";

export default function MainNav() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-white/70 backdrop-blur-md shadow-md" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        <div className="text-lg font-bold text-gray-800 dark:text-gray-100">
          My Portfolio
        </div>
        <ul className="flex space-x-6">
          <li>
            <a href="#profile" className="text-gray-700 dark:text-gray-300 hover:text-blue-500 transition">
              Profile
            </a>
          </li>
          <li>
            <a href="#about" className="text-gray-700 dark:text-gray-300 hover:text-blue-500 transition">
              About
            </a>
          </li>
          <li>
            <a href="#experience" className="text-gray-700 dark:text-gray-300 hover:text-blue-500 transition">
              Experience
            </a>
          </li>
          <li>
            <a href="#projects" className="text-gray-700 dark:text-gray-300 hover:text-blue-500 transition">
              Projects
            </a>
          </li>
          <li>
            <a href="#tech-stack" className="text-gray-700 dark:text-gray-300 hover:text-blue-500 transition">
              Tech Stack
            </a>
          </li>
          <li>
            <a href="#contact" className="text-gray-700 dark:text-gray-300 hover:text-blue-500 transition">
              Contact
            </a>
          </li>
        </ul>
        <a
          href="#top"
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition"
        >
          Back to Top
        </a>
      </div>
    </nav>
  );
}