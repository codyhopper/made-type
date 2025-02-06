import Link from 'next/link';

export default function Header() {
    return (
        <footer className="fixed w-[calc(100vw-4rem)] bottom-0 py-2">
            <div className="flex justify-between">
                <div>&copy; Cody Hopper, 2019</div>
                <div>
                    <Link
                        className=""
                        href="#main-content"
                    >
                        back to top &uarr;
                    </Link>
                </div>
            </div>
        </footer>
    );
}
