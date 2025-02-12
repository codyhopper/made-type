import clsx from 'clsx';
import { RivetFont, WidescreenFont, ModalFont, BandsawFont } from 'lib/custom-fonts';

const fonts = {
    Rivet: RivetFont,
    Widescreen: WidescreenFont,
    Modal: ModalFont,
    Bandsaw: BandsawFont,
};

type FontName = keyof typeof fonts;

interface Card {
    title: FontName;
    description: string;
    sample: string;
    underConstruction?: boolean;
}

export default function Card({ title, underConstruction, sample, description }: Card) {
    const fontName = fonts[title];

    return (
        <div className={clsx(
            "h-full relative rounded-xl bg-black border-transparent border-px hover:shadow-md focus-within:shadow-md transition-shadow group/card before:absolute before:rounded-xl before:top-1/2 before:left-1/2 before:-translate-x-1/2 before:-translate-y-1/2 before:w-[calc(100%+1rem)] before:h-[calc(100%+1rem)] before:transition-[opacity,background-position] before:will-change-[opacity,background-position]",
            {
                "before:bg-[repeating-linear-gradient(-45deg,_theme('colors.yellow.600'),_theme('colors.yellow.500')_1.618rem,_theme('colors.zinc.800')_1rem,_theme('colors.zinc.700')_2.618rem)] before:bg-[top_left] motion-safe:hover:before:bg-[top_left_1rem] motion-safe:focus-within:before:bg-[top_left_1rem] before:duration-[1s] hover:before:duration-300": underConstruction === true,
                "before:bg-gradient-to-br before:bg-[size:100%_200%] before:bg-[position:top] hover:before:from-zinc-700 hover:before:via-white hover:before:to-zinc-800  focus-within:before:from-zinc-600 focus-within:before:to-zinc-950 focus-within:before:bg-[position:bottom]": underConstruction !== true,
            }
        )}>
            <div className="relative flex flex-col md:flex-row min-h-full gap-2 md:gap-8 bg-black rounded-lg">
                {/* sample area */}
                <textarea
                    className={clsx(
                        `relative block bg-zinc-900 rounded-l-lg rounded-r-xl w-full md:w-2/3 p-4 ${fontName.className}`,
                        { 'text-7xl md:text-9xl': title === 'Bandsaw' || title === 'Rivet' },
                        { 'text-3xl md:text-7xl': title === 'Widescreen' || title === 'Modal' },
                    )}
                    style={{ resize: 'none' }}
                    defaultValue={sample}
                ></textarea>

                {/* descriptive content */}
                <div className={`relative flex flex-col gap-3 md:basis-1/3 m-3 md:m-4 bg-black`}>
                    <h2 className="text-2xl">{title}</h2>
                    <p className="pr-4">{description}</p>

                    {/* flags */}
                    { underConstruction && (
                        <div className="h-full flex flex-col justify-end items-end pr-3 pb-3">
                            <div className="mt-auto w-fit bg-gradient-to-br from-yellow-500 to-yellow-600 rounded-full px-2 py-1 border-2 border-yellow-600 shadow-md shadow-yellow-800 hover:shadow-sm transition-shadow">
                                <span className="font-bold pointer-events-none">Under Construction</span>
                            </div>
                        </div>
                    )}
                </div>

            </div>
        </div>
    );
}
