import { ArrowDownTrayIcon } from '@heroicons/react/24/solid';

interface DownloadButtonProps {
    font: string;
}

export default function DownloadButton({ font }: DownloadButtonProps) {
    const handleDownload = () => {
        const link = document.createElement("a");
        link.href = `/fonts/${font}.otf`;
        link.download = `${font}.otf`;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    return (
        <div className="">
            <button
                className="flex gap-2 items-center underline underline-offset-2 transition-all motion-safe:hover:underline-offset-4"
                onClick={handleDownload}
            >
                <div className="">Download Typeface</div>
                <ArrowDownTrayIcon className="size-4 mb-" />
            </button>
        </div>
    );
}
