'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { usePathname } from 'next/navigation';
import { USER_NAV_ITEMS } from '@/constants/navigation';
import { ROUTES } from '@/constants/routes';

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const menuItems = USER_NAV_ITEMS;

  const isActive = (href: string) => {
    if (href === ROUTES.USER.HOME) {
      return pathname === ROUTES.USER.HOME;
    }
    return pathname.startsWith(href);
  };

  return (
    <nav className="bg-linear-to-r from-green-700 to-green-800 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link href={ROUTES.USER.HOME} className="shrink-0">
            <Image
              src="/assets/icons/logo-pk-green.png"
              alt="Pasar Kebun Logo"
              width={120}
              height={50}
              className="h-auto w-auto"
              priority
            />
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            {menuItems.map((item) => (
              <div key={item.href} className="relative group">
                <Link
                  href={item.href}
                  className="text-white font-semibold hover:text-green-200 transition-colors duration-200 text-sm lg:text-base pb-3"
                >
                  {item.label}
                </Link>
                <div
                  className={`absolute left-0 right-0 h-1 rounded-full transition-colors duration-200 ${
                    isActive(item.href)
                      ? 'bg-white'
                      : 'bg-transparent'
                  }`}
                />
              </div>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-white hover:bg-green-600 transition-colors"
              aria-label="Toggle menu"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden pb-4">
            <div className="flex flex-col space-y-2">
              {menuItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`text-white font-semibold px-3 py-2 rounded-md transition-colors ${
                    isActive(item.href)
                      ? 'bg-green-600 border-l-4 border-white'
                      : 'hover:bg-green-600'
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
