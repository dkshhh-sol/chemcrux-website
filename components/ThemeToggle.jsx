'use client'
import { useTheme } from '@/context/ThemeContext'
import { FiSun, FiMoon } from 'react-icons/fi'

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme()

  return (
    <button
      onClick={toggleTheme}
      className="p-2 rounded-full hover:bg-chemcrux-accent/10 transition-colors"
      aria-label="Toggle theme"
    >
      {theme === 'dark' ? (
        <FiSun className="w-5 h-5 text-chemcrux-secondary" />
      ) : (
        <FiMoon className="w-5 h-5 text-chemcrux-primary" />
      )}
    </button>
  )
}