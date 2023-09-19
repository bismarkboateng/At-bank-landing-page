import { FooterImage, Line } from "../../assets"
import { Logo } from "../../assets"



export default function index() {
    return (
      <footer className="relative">
        <img src={FooterImage} alt="footer" className="w-[100%] h-[268px] absolute z-[0]" />
        <img src={Line} alt="line" className="absolute w-[1070px] top-[230px] left-[300px] z-[10]" />

        <div className="flex flex-row relative">

          <div className="flex flex-row justify-start items-start mr-auto cursor-pointer">
            <img src={Logo}
            className="w-16"
            />
            <div className="font-montserrat text-[21px] mt-3 font-medium leading-[31.5px] text-white">
              <span className="font-bold">Atom</span>Bank
            </div>
          </div>

          <div className="absolute">
              <div className="font-poppins font-medium text-lg leading-[21.6px]">Lokasi</div>
          </div>
        </div>

      </footer>
    )
  }