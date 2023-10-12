import Link from 'next/link';
import React from 'react';

// assets
import { AiFillBug } from 'react-icons/ai';

const links = [
  { label: 'Dashboard', href: '/' },
  { label: 'Issues', href: '/issues' },
];

const NavBar = () => {
  return (
    <nav className="flex space-x-6 border-b mb-5 px-5 h-14 items-center">
      <Link href="/">
        <AiFillBug />
      </Link>
      <ul className="flex space-x-6">
        {links.map((link) => (
          <li
            key={link.label}
            className="text-zinc-500 hover:text-zinc-800 transition-colors"
          >
            <Link href={link.href}>{link.label}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default NavBar;
