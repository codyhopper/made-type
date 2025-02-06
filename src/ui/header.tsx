import Navlinks from '../ui/navlinks';
import Link from 'next/link';

export default function Header() {
    return (
        <header className="flex flex-row-reverse justify-between">
            <Navlinks />
            <Link href="/" >made—type foundry</Link>
        </header>
    );
}
