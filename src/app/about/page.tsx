import Header from "ui/header";
import Footer from "ui/footer";
import Hero from "ui/hero";

export default function Home() {
    const pageTitle = 'About & Licensing'
    return (
        <div className="min-h-screen p-8 font-[family-name:var(--font-geist-sans)]">
            <Header />

            <main className="">
                <Hero title={pageTitle}/>
            </main>

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
                Cody Hopper
            </p>

            <p className="">
                made—type<br/>
                is hoping you will<br/>
                make type, too
            </p>

            <Footer />
        </div>
    );
}
