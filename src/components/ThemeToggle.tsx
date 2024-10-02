"use client"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun, faMoon } from '@fortawesome/free-solid-svg-icons'; // Import the icons
import { useTheme } from '../context/ThemeContext';

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      className="fixed top-5 right-5 py-2 px-4 bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-white rounded"
      onClick={toggleTheme}
    >
      <FontAwesomeIcon icon={theme === 'light' ? faSun : faMoon} />
    </button>
  );
};

export default ThemeToggle;
