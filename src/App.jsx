import { Navbar, HeroSection, Banner, Easy, Future } from "./components"

export default function App() {

  return (
    <div>
      <Navbar />
      <HeroSection />
      <Banner />

      <section className="border-2 border-red-500 w-8/12 mx-auto mt-[120px]">
        <Easy />
        <Future />
      </section>
    </div>
  )
}