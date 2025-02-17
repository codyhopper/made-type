import Navlinks from '../ui/navlinks';

import Link from 'next/link';

export default function Header() {
    return (
        <header className="flex justify-between">
            <Link href="/" >made—type foundry</Link>
            <>
                <Navlinks />

            </>
        </header>
    );
}
