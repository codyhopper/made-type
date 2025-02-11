interface Hero {
    title: string;
}

export default function Hero({ title }: Hero) {
    return (
        <div className="space-y-5">
            <h1 className="text-4xl lg:text-9xl font-[300] text-red-500 kern">{title}</h1>

            {/* turn on/off hidden characters:
                tab »
                paragraph return ¶
                forced line break¬
                end of story #
            */}
        </div>
    );
}
