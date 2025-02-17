import Header from "ui/header";
import Footer from "ui/footer";
import Hero from "ui/hero";

export default function Home() {
    const pageTitle = 'Custom Work'
    return (
        <div className="min-h-screen p-8 font-[family-name:var(--font-geist-sans)]">
            <Header />
            <main className="mb-12">
                <Hero title={pageTitle}/>
            </main>

            <div className="prose-2xl my-12">
                <p>
                    made—type is available for creating custom typefaces<br />
                    that elevate brands and bring your vision to life<br />
                    whether a new project or an existing one<br />
                    we craft type that speaks for itself<br />
                    and leaves a lasting impression<br />
                </p>
                <p>
                    let’s create a phenomenon together<br />
                    reach out to start the conversation<br />
                </p>
                <p>
                    hello [at] codyhopper [dot] com
                </p>
            </div>

            <Footer />
        </div>
    );
}
