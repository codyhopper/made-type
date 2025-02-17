import Header from "ui/header";
import Footer from "ui/footer";
import Hero from "ui/hero";
import Link from "next/link";

export default function Home() {
    const pageTitle = 'About & Licensing'
    return (
        <div className="min-h-screen p-8 font-[family-name:var(--font-geist-sans)]">
            <Header />

            <main className="mb-12">
                <Hero title={pageTitle}/>
            </main>

            <div className="prose-2xl my-12">
                <p className="">
                    made—type<br/>
                    is an independent<br/>
                    type foundry
                </p>

                <p className="">
                    made—type<br/>
                    is making typefaces<br/>
                    inspired by objects,<br/>
                    environments,<br/>
                    and natural phenomena<br/>
                    including pull-tabs,<br/>
                    digital screens,<br/>
                    and the bone structure<br/>
                    of the human body
                </p>

                <p className="">
                    made—type<br/>
                    is being made by<br/>
                    <Link href="https://codyhopper.com" className="underline">Cody Hopper</Link>
                </p>

                <p className="">
                    made—type<br/>
                    is hoping you will<br/>
                    make type, too
                </p>
            </div>

            <Footer />
        </div>
    );
}
