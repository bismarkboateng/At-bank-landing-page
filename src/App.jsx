import { Navbar, HeroSection, 
  Banner, Easy, Future, 
  DebitCard, NewsLetter, Footer } from "./components"

export default function App() {

  return (
    <div>
      <Navbar />
      <HeroSection />
      <Banner />
      <section className="w-[58%] ml-[22.5%] mt-[120px]">
        <Easy />
        <Future />
        <DebitCard />
      </section>
      <NewsLetter />
      <Footer />
    </div>
  )
}