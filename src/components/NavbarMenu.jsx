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

function NavbarMenu({ navigation }) {
  return (
    <div className="flex sm:hidden">
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="ghost" size="icon">
            <Menu color="white" />
            <span className="sr-only">Toggle menu</span>
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-56">
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
