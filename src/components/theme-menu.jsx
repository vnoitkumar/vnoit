import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";

import {
  MoonIcon,
  SunIcon,
  ComputerDesktopIcon,
} from "@heroicons/react/24/outline";

function ThemeMenu(params) {
  return (
    <Menu as="div" className="relative inline-block text-left">
      <div>
        <MenuButton className="p-2 rounded-full focus:outline-none bg-violet-300">
          <MoonIcon
            aria-hidden="true"
            className="h-6 w-6 flex-none text-baby-powder block dark:hidden"
          />
          <SunIcon
            aria-hidden="true"
            className="h-6 w-6 flex-none text-baby-powder hidden dark:block"
          />
        </MenuButton>
      </div>

      <MenuItems
        transition
        className="absolute right-0 z-10 mt-2 origin-top-right rounded-lg ring-1 ring-slate-900/10 dark:ring-baby-powder/20 shadow-lg overflow-hidden w-36 py-1 text-sm font-semibold dark:highlight-white/5 text-jet-black dark:text-baby-powder bg-baby-powder dark:bg-jet-black"
      >
        <div className="py-1">
          <MenuItem>
            <div className="flex gap-3 px-4 py-2 text-base  dark:data-[focus]:bg-baby-powder data-[focus]:bg-jet-black dark:data-[focus]:text-jet-black data-[focus]:text-baby-powder cursor-pointer">
              <SunIcon aria-hidden="true" className="h-6 w-6" />
              Light
            </div>
          </MenuItem>
          <MenuItem>
            <div className="flex gap-3 px-4 py-2 text-base  dark:data-[focus]:bg-baby-powder data-[focus]:bg-jet-black dark:data-[focus]:text-jet-black data-[focus]:text-baby-powder cursor-pointer">
              <MoonIcon aria-hidden="true" className="h-6 w-6" />
              Dark
            </div>
          </MenuItem>
          <MenuItem>
            <div className="flex gap-3 px-4 py-2 text-base  dark:data-[focus]:bg-baby-powder data-[focus]:bg-jet-black dark:data-[focus]:text-jet-black data-[focus]:text-baby-powder cursor-pointer">
              <ComputerDesktopIcon aria-hidden="true" className="h-6 w-6" />
              System
            </div>
          </MenuItem>
        </div>
      </MenuItems>
    </Menu>
  );
}

export default ThemeMenu;
