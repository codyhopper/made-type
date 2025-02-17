'use client';

import Link from 'next/link';
import ThemeToggle from '../ui/theme-toggle';
import clsx from 'clsx';
import { usePathname } from 'next/navigation';

const links = [
    {
        name: 'Custom Work',
        href: '/custom-work',
    },
    {
        name: 'About & Licensing',
        href: '/about',
    },
];

export default function Navlinks() {
    const pathname = usePathname();

    return (
        <nav>
            <ul className="">
                {links.map((link) => {
                    return (
                        <li key={link.name} className="pr-[1ch]">
                            <Link
                                href={link.href}
                                className={clsx(
                                    "group",
                                    { 'text-blue-600': pathname === link.href }
                                )}
                            >
                                <p
                                    className={clsx(
                                        "group-hover:text-red-500 after:absolute group-hover:after:content-['•']",
                                        { "after:content-['•'] after:text-red-500": pathname === link.href }
                                    )}
                                >{link.name}</p>
                            </Link>
                        </li>
                    );
                })}
            </ul>
            <ThemeToggle />
        </nav>
    );
}
