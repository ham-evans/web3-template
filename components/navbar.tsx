import Image from "next/image";
import Link from "next/link";
import { Disclosure } from "@headlessui/react";

import MenuIcon from "@heroicons/react/outline/MenuIcon";
import XIcon from "@heroicons/react/outline/XIcon";

import { ConnectButton } from "@rainbow-me/rainbowkit";

export const navigation = [
  { name: "Page1", href: "/" },
  {
    name: "Page2",
    href: "/",
  },
];

export default function Header() {
  return (
    <Disclosure
      as="header"
      className="header w-full sticky top-0 z-50 h-20 bg-gray-100 text-gray-500  shadow-lg"
    >
      {({ open }) => (
        <>
          <div
            className="px-4 sm:px-6 lg:px-8 border-b lg:border-none "
            aria-label="Top"
          >
            <div className="relative flex items-center justify-between h-20">
              <div className="logo">
                <div className="block sm:hidden">
                  <Link href="/">
                    <a>
                      <Image
                        src="/logo.svg"
                        width={19.7}
                        height={48}
                        alt="Logo"
                      />
                    </a>
                  </Link>
                </div>
                <div className="hidden sm:block">
                  <Link href="/">
                    <a>
                      <Image
                        src="/logo.svg"
                        width={100}
                        height={55}
                        alt="Logo"
                      />
                    </a>
                  </Link>
                </div>
              </div>

              <div className="menu-items items-center justify-center sm:items-stretch sm:justify-start hidden lg:flex">
                <nav className="flex space-x-4">
                  {navigation.map((item) => (
                    <Link href={item.href} key={item.name}>
                      <a className="header-nav--link text-xl font-medium  hover:text-gray-700 focus:text-gray-700">
                        {item.name}
                      </a>
                    </Link>
                  ))}
                </nav>
              </div>

              <div className="grid grid-flow-col gap-1 sm:gap-4">
                <ConnectButton
                  accountStatus="address"
                  chainStatus="name"
                  showBalance={false}
                />
              </div>

              {/* hamburger icon, visible mobile only */}
              <div className="hamburger flex items-center lg:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover: hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="lg:hidden bg-gray-100 shadow-lg">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navigation.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as="a"
                  href={item.href}
                  className=" block px-3 py-2 rounded-md text-2xl font-medium hover:text-gray-700 focus:text-gray-700"
                  aria-current={item.name ? "page" : undefined}
                >
                  {item.name}
                </Disclosure.Button>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}
