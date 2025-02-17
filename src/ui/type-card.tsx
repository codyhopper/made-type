"use client";

import clsx from 'clsx';
import FontSlider from '../ui/font-slider';
import { RivetFont, WidescreenFont, ModalFont, BandsawFont } from 'lib/custom-fonts';
import { PencilIcon } from '@heroicons/react/24/solid';
import { useState } from "react";

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
    const [fontSize, setFontSize] = useState(54)

    return (
        <div className={clsx(
            "h-full relative rounded-xl border-transparent border-px group/card before:absolute before:rounded-xl before:top-1/2 before:left-1/2 before:-translate-x-1/2 before:-translate-y-1/2 before:w-[calc(100%+1rem)] before:h-[calc(100%+1rem)] before:transition-[opacity,background-position] before:bg-[size:100%_200%] before:will-change-[opacity,background-position] before:duration-300 hover:before:duration-600 focus-within:before:duration-600",
            {
                "before:bg-[repeating-linear-gradient(-45deg,_theme('colors.yellow.500'),_theme('colors.yellow.400')_1.618rem,_theme('colors.zinc.500')_1rem,_theme('colors.zinc.400')_2.618rem)] dark:before:bg-[repeating-linear-gradient(-45deg,_theme('colors.yellow.600'),_theme('colors.yellow.500')_1.618rem,_theme('colors.zinc.800')_1rem,_theme('colors.zinc.700')_2.618rem)] before:bg-[top_left] motion-safe:hover:before:bg-[top_left_1rem] motion-safe:focus-within:before:bg-[top_left_1rem]": underConstruction === true,
                "before:opacity-10 before:bg-gradient-to-br before:bg-[position:top] before:from-zinc-300 before:via-zinc-200 before:to-zinc-500 dark:before:from-zinc-600 dark:before:via-zinc-400 dark:before:to-zinc-800 hover:before:opacity-100 focus-within:before:bg-[position:bottom] ": underConstruction !== true,
            }
        )}>
            <div className="relative flex flex-col md:flex-row h-full max-h-full gap-2 md:gap-8 bg-zinc-300 dark:bg-black rounded-lg">
                {/* sample area */}
                <div className="relative block w-full md:w-2/3 max-h-full bg-zinc-300 dark:bg-zinc-950 rounded-l-lg rounded-r-xl ">
                    <textarea
                        className={clsx(
                            `relative block w-full h-full max-h-full rounded-l-lg rounded-r-xl p-4 bg-zinc-200 dark:bg-zinc-950 peer ${fontName.className}`,
                            { 'text-7xl md:text-9xl': title === 'Bandsaw' || title === 'Rivet' },
                            { 'text-3xl md:text-7xl': title === 'Widescreen' || title === 'Modal' },
                        )}
                        style={{ resize: 'none', fontSize: `${fontSize}px` }}
                        defaultValue={sample}
                    ></textarea>

                    {/* editable */}
                    <div className="absolute right-3 bottom-3 flex items-center gap-1 pointer-events-none group/edit text-zinc-400 peer-focus-within:opacity-0 transition-opacity">
                        <PencilIcon className="size-4" />
                        <div className="opacity-0 transition-all group-hover/card:opacity-100 group-hover/card:w-[6ch] w-0 overflow-hidden">Editable</div>
                    </div>

                    <FontSlider fontSize={fontSize} onFontSizeChange={setFontSize}/>
                </div>

                {/* descriptive content */}
                <div className={`relative flex flex-col gap-3 md:basis-1/3 m-3 md:m-4`}>
                    <h2 className="text-2xl">{title}</h2>
                    <p className="pr-4">{description}</p>

                    {/* flags */}
                    { underConstruction && (
                        <div className="h-full flex flex-col justify-end items-end pr-3 pb-3">
                            <div className="mt-auto w-fit rounded-full px-2 py-1 border-2 border-yellow-400 dark:border-yellow-600 bg-gradient-to-br from-yellow-300 dark:from-yellow-500 to-yellow-500 dark:to-yellow-600 shadow-md shadow-yellow-500 dark:shadow-yellow-800 hover:shadow-sm transition-shadow">
                                <span className="font-bold pointer-events-none text-zinc-600 dark:text-zinc-950 ">Under Construction</span>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
