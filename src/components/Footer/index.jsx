import { FacebookLogo, InstagramLogo, Logo, Line } from "../../assets"



export default function index() {
    return (
      <footer className="bg-[#1D2027] h-[268px] w-[100%]">

        <div className="flex flex-row w-[58%] ml-[22.5%] pt-20">

          <div className="flex flex-row justify-start items-start cursor-pointer mr-auto">
            <img src={Logo}
            className="w-16"
            />
            <div className="font-montserrat text-xl mt-3 font-bold leading-[31.5px] text-white">
              Atom<span className="text-xl font-medium leading-[31.5px]">Bank</span>
            </div>
          </div>

          <div className="font-poppins mr-auto">
            <div className="font-medium text-white text-lg leading-[21.6px] mb-3">Lokasi</div>
            <p className="font-normal text-sm leading-[21px] text-gray-400">
              Lorem ipsum dolor sit amet,<br />
              consectetur adipiscing elit.
            </p>
          </div>

          <div className="font-poppins mr-auto">
            <div className="font-medium text-lg leading-[21.6px] text-white mb-3">Kontak</div>
            <p className="font-normal text-sm leading-[21px] text-gray-400">
              Costumer Service 0812 - 1234 -5678
            </p>
          </div>

          <div className="flex flex-col gap-4">
            <div className="flex flex-row items-center gap-4">
              <img src={FacebookLogo} alt="facebook" />
              <p className="text-gray-400">@atombank</p>
            </div>

            <div className="flex flex-row items-center gap-4">
              <img src={InstagramLogo} alt="facebook" />
              <p className="text-gray-400">@atombank</p>
            </div>
          </div>

        </div>

        <img src={Line} alt="line" className="w-[58%] ml-[22.5%] mt-[50px]" />
        
        <div className="font-poppins font-normal text-sm leading-[21px] text-gray-400 text-center mt-5">
          HeyAnarda @2021
        </div>

      </footer>
    )
  }