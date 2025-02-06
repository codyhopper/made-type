interface Hero {
    title: string;
}

export default function Hero({ title }: Hero) {
    return (
        <div className="space-y-5">
            <h1 className="text-4xl lg:text-9xl font-[300] text-red-500 kern">{title}</h1>

            <p>Type Foundry drawing from everyday phenomena</p>

            <ul className="list">
                <li>
                    Bandsaw is a rectilinear sans serif inspired by industrial machinery. Features at the cap height and baseline resemble the teeth of saw blades.
                </li>
                <li>
                    Rivet is a modular sans serif inspired by the unique structure of a manhole covering located in downtown Richmond, VA.
                </li>
                <li>
                    Modal is a monospace sans serif inspired by pull-tabs found on food packaging. Each letterform utilizes a single, non-intersecting stroke within a 4x4 grid.
                </li>
                <li>
                    Enfant, a geometric sans serif, is based on the structure of the RapiDesign Isometric Ellipse Stencil no. 123.
                </li>
                <li>
                    Widescreen
                </li>
            </ul>

            turn on/off hidden characters:

            tab »
            paragraph return ¶
            forced line break¬
            end of story #
        </div>
    );
}
