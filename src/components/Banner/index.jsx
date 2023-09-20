import { Banner, Contour } from "../../assets"
import { Frame, SecureFrame} from ".."


export default function index() {
  return (
    <section className="hidden md:hidden lg:block mt-[170px] w-10/12 mx-auto relative">
        <img src={Banner} alt="banner" className="w-[100%] h-[500px] md:w-[100%] lg:w-[100%] lg:h-[300px]" />
        <img src={Contour} alt="loops" className="w-[100%] h-[500px] absolute top-0 left-0 lg:absolute lg:top-0 lg:left-0 lg:w-[100%] lg:z-[0]" />

        <div 
          className="mb-5 flex flex-col absolute
            top-0 left-0 md:mb-5 lg:mb-0 md:flex-col 
            lg:absolute lg:top-0 lg:left-0 lg:flex-row"
        >
          <Frame />
          <SecureFrame />
        </div>
    </section>
  )
}

// md:absolute md:top-0 md:left-0 md:flex md:flex-row