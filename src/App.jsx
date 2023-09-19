import { Navbar, HeroSection, Banner, Easy, Future, DebitCard, NewsLetter } from "./components"

export default function App() {

  return (
    <div>
      <Navbar />
      <HeroSection />
      <Banner />

      <section className="w-8/12 mx-auto mt-[120px]">
        <Easy />
        <Future />
        <DebitCard />
      </section>
      <NewsLetter />
    </div>
  )
}