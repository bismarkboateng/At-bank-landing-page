import { Banner, Contour } from "../../assets"
import { Frame, SecureFrame} from ".."


export default function index() {
  return (
    <section className="mt-[170px] w-10/12 mx-auto relative">
        <img src={Banner} alt="banner" className="w-[100%] h-[300px]" />
        <img src={Contour} alt="loops" className="absolute top-0 left-0 w-[100%] z-[0]" />

        <div className="absolute top-0 left-0 flex flex-row">
          <Frame />
          <SecureFrame />
        </div>
    </section>
  )
}