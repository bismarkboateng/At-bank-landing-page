import { NavLinks } from "./links"
import { Logo, Menu, Cross } from "../../assets"
import { Button } from ".."
import { useState } from "react"



export default function index() {
    const [mobile, setMobile] = useState(false)

    function onMenuClick() {
      setMobile(prevMobile => !prevMobile)
    }

    console.log(mobile)

    return (
      <nav  className="flex flex-row items-center w-10/12 mx-auto mt-8">
        <div className="flex flex-row justify-start items-start mr-auto cursor-pointer">
          <img src={Logo}
          className="w-16"
          />
          <div className="font-montserrat text-xl
          mt-3 font-bold leading-[31.5px]">Atom<span className="font-montserrat text-xl font-medium leading-[31.5px]">Bank</span></div>
        </div>

        <div className="hidden md:flex md:flex-row md:gap-12 md:mr-auto md:mb-2">
          { NavLinks.map(link => (
            <li key={link.id}
              className="font-poppins font-medium text-base leading-[20px]
              list-none cursor-pointer"
            >
              {link.title}
            </li>
          ))}
        </div>

        <div className="hidden lg:flex lg:flex-row lg:gap-7">
            <Button
              className="bg-gray-100 py-4 px-8 rounded-xl font-medium font-poppins text-base leading-[20px]"
            >Log in
            </Button>
            <Button
              className="bg-gray-800 py-4 px-8 rounded-xl font-medium font-poppins text-base text-white leading-[20px]"
              >
              Register
            </Button>
        </div>

        <div className="block md:hidden mb-2" onClick={onMenuClick}>
            <img src={Menu} alt="menu" className="w-[30px]" />
        </div>

        { mobile && (
          <div className="absolute top-0 left-0 w-full h-screen animate-slideRight">
            <img src={Cross} className="absolute z-[11] top-5 right-5" onClick={onMenuClick}/>
            <div 
              className="absolute z-[10] top-0
              left-0 w-full h-screen bg-white flex flex-col
              items-center justify-center"
              >
            { NavLinks.map(link => (
              <li key={link.id}
                className="font-poppins font-medium text-base leading-[20px]
                list-none cursor-pointer mb-8 last:mb-0"
              >
                {link.title}
              </li>
            ))}
            </div>
          </div>
        )}

      </nav>
    )
}  