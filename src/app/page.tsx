// 'use client';

import Header from "ui/header";
import Footer from "ui/footer";
import Hero from "ui/hero";
import TypeCard from "ui/type-card";
import FadeInSection from "ui/fade-section";
// import { useEffect } from "react";

export default function Home() {
    const pageTitle = 'made⎯type'

    return (
		<div className="min-h-screen p-8 font-[family-name:var(--font-geist-sans)]">
			<Header />

			<main className="">
                <Hero title={pageTitle}/>

                <p>An independent type foundry making fonts drawn from objects, environments, and natural phenomena.</p>

                <div className="grid gap-8 md:gap-16 md:grid-rows-[repeat(4,400px)] my-12">
                    <FadeInSection>
                        <TypeCard
                            title="Bandsaw"
                            sample="Crude Shops Work Magnificent Results"
                            description="Bandsaw is a rectilinear sans-serif inspired by industrial machinery. Features at the cap height and baseline resemble the teeth of saw blades."
                        />
                    </FadeInSection>
                    <FadeInSection>
                        <TypeCard
                            title="Modal"
                            underConstruction={true}
                            sample="Anomalous Signal Decrypted"
                            description="Modal is a monospace sans serif inspired by pull-tabs found on food packaging. Each letterform utilizes a single, non-intersecting stroke within a 4x4 grid."
                        />
                    </FadeInSection>
                    <FadeInSection>
                        <TypeCard
                            title="Rivet"
                            underConstruction={true}
                            sample="Forged Steel Stacked Heavily"
                            description="Rivet is a modular sans serif inspired by the unique structure of a manhole covering located in downtown Richmond, VA."
                        />
                    </FadeInSection>
                    <FadeInSection>
                        <TypeCard
                            title="Widescreen"
                            underConstruction={true}
                            sample="flashback unlocked"
                            description="Widescreen is a modular sans serif inspired by the vernacular of digital screens; each letterform uses a ratio of 16:9."
                        />
                    </FadeInSection>
                </div>
			</main>

			<Footer />
    	</div>
  	);
}
