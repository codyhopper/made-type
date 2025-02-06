import Header from "ui/header";
import Footer from "ui/footer";
import Hero from "ui/hero";

export default function Home() {
    const pageTitle = 'made⎯type'
    return (
		<div className="min-h-screen p-8 font-[family-name:var(--font-geist-sans)]">
			<Header />
			<main className="">
				<Hero title={pageTitle}/>
			</main>
			<Footer />
    	</div>
  	);
}
