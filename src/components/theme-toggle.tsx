'use client';

import { useState, useEffect } from 'react';
import { useTheme } from 'next-themes';
import { FiSun, FiMoon } from 'react-icons/fi';

// Tema değiştirme butonu, kullanıcının light ve dark modu arasında geçiş yapmasını sağlar
export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // Hydration hatalarını önlemek için component mount olduktan sonra render
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <button
      className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500"
      onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
      aria-label={theme === 'dark' ? 'Aydınlık moda geç' : 'Karanlık moda geç'}
    >
      {theme === 'dark' ? (
        <FiSun className="w-5 h-5 text-amber-400" />
      ) : (
        <FiMoon className="w-5 h-5 text-blue-700" />
      )}
    </button>
  );
} 