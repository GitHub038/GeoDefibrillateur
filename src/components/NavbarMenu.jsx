import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
} from '@/components/ui/dropdown-menu'
import { Button } from '@/components/ui/button'
import { Menu } from 'lucide-react'
import { classNames } from '../utils/helpers.js'
import { useTheme } from '@/hooks/useTheme.jsx'
import { Moon, Sun } from 'lucide-react'

function NavbarMenu({ navigation }) {
  const { theme, setTheme } = useTheme()
  const oppositeTheme = theme === 'dark' ? 'light' : 'dark'
  return (
    <div className="flex sm:hidden">
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button
            variant="ghost"
            className="dark:hover:bg-[#020817]"
            size="icon"
          >
            <Menu color="white" />
            <span className="sr-only">Toggle menu</span>
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-56">
          <DropdownMenuItem
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            className="hover:cursor-pointer"
          >
            {theme === 'dark' ? <Sun /> : <Moon />}
            <p className="pl-2">
              {oppositeTheme.charAt(0).toUpperCase() + oppositeTheme.slice(1)}
            </p>
          </DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuLabel>Menu</DropdownMenuLabel>
          <DropdownMenuSeparator />
          {navigation.map((item) => (
            <DropdownMenuItem key={item.name}>
              <a
                href={item.href}
                className={classNames(
                  item.current
                    ? 'rounded-l-none hover:cursor-pointer hover:border-l-2 hover:border-primary'
                    : 'rounded-l-none hover:cursor-pointer hover:border-l-2 hover:border-primary',
                )}
                aria-current={item.current ? 'page' : undefined}
              >
                {item.name}
              </a>
            </DropdownMenuItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  )
}

export { NavbarMenu }
