import { ThemeProviderContext } from '@/context/ThemeContext.jsx'
import { useContext } from 'react'

const useTheme = () => {
  const context = useContext(ThemeProviderContext)
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider')
  }
  return context
}
export { useTheme }
