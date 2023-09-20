import { Navbar, HeroSection, 
  Banner, Easy, Future, 
  DebitCard, NewsLetter, Footer } from "./components"

export default function App() {

  return (
    <div>
      <Navbar />
      <HeroSection />
      <Banner />
      <section className="w-[80%] mx-auto md:w-[80%] lg:w-[58%] lg:ml-[22.5%] lg-[120px]">
        <Easy />
        <Future />
        <DebitCard />
      </section>
      <NewsLetter />
      <Footer />
    </div>
  )
}