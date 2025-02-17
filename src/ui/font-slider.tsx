"use client";

interface FontSliderProps {
    fontSize: number;
    onFontSizeChange: (size: number) => void;
}

export default function FontSlider({ fontSize, onFontSizeChange }: FontSliderProps) {

    return (
        <div className="absolute left-3 bottom-3 opacity-0 transition-opacity group-hover/card:opacity-100">
            <div className="flex items-center gap-2">
                <label htmlFor="fontSize" className="">Size</label>
                <input
                    id="fontSize"
                    type="range"
                    min="24"
                    max="240"
                    value={fontSize}
                    className="w-full h-2 bg-white rounded-lg appearance-none cursor-pointer dark:bg-zinc-700 accent-zinc-700 dark:accent-zinc-300"
                    onChange={(e) => {
                        const newSize = Number(e.target.value);
                        if (typeof onFontSizeChange === 'function') {
                            onFontSizeChange(newSize);
                        }
                    }}
                />
            </div>
        </div>
    );
}
