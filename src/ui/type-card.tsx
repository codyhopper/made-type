import clsx from 'clsx';
import { RivetFont } from 'lib/custom-fonts'
import { WidescreenFont } from 'lib/custom-fonts'
import { ModalFont } from 'lib/custom-fonts'
import { BandsawFont } from 'lib/custom-fonts'

type FontName = 'Rivet' | 'Widescreen' | 'Modal' | 'Bandsaw';

interface Card {
    title: FontName;
    description: string;
    sample: string;
    underConstruction?: boolean;
}

export default function Card({ title, underConstruction, sample, description }: Card) {
    const fonts = {
        Rivet: RivetFont,
        Widescreen: WidescreenFont,
        Modal: ModalFont,
        Bandsaw: BandsawFont,
    };
    const fontName = fonts[title];

    return (
        <div className={clsx(
            "relative rounded-xl bg-black  before:rounded-xl hover:shadow-lg hover:shadow-white",
            { "before:absolute before:top-1/2 before:left-1/2 before:-translate-x-1/2 before:-translate-y-1/2 before:w-[calc(100%+1rem)] before:h-[calc(100%+1rem)] before:bg-[repeating-linear-gradient(-45deg,_theme('colors.yellow.600'),_theme('colors.yellow.500')_1.618rem,_theme('colors.yellow.800')_1rem,_theme('colors.yellow.700')_2.618rem)]": underConstruction === true }
        )}>
            <div className="relative flex min-h-full gap-8 bg-black rounded-lg">
                {/* sample area */}
                <textarea
                    className={clsx(
                        `relative block md:w-2/3 p-4 ${fontName.className}`,
                        { 'text-9xl': title === 'Bandsaw' || title === 'Rivet' },
                        { 'text-7xl': title === 'Widescreen' || title === 'Modal' },
                    )}
                    defaultValue={sample}
                ></textarea>

                {/* descriptive content */}
                <div className={`relative flex flex-col gap-3 md:basis-1/3 my-4 bg-black`}>
                    <h2 className="text-2xl">{title}</h2>
                    <p className="pr-4">{description}</p>

                    {/* flags */}

                    {underConstruction && (
                        <div className="h-full flex flex-col justify-end items-end pr-3">
                            <div className="mt-auto w-fit bg-gradient-to-br from-yellow-500 to-yellow-600 rounded-full px-2 py-1 border-2 border-yellow-600 shadow-md shadow-white">
                                <span className="font-bold">Under Construction</span>
                            </div>
                        </div>
                    )}
                </div>

            </div>
        </div>
    );
}
