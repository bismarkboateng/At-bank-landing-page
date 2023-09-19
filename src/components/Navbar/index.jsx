import { NavLinks } from "./links"
import { Logo } from "../../assets"
import { Button } from ".."



export default function index() {
    return (
      <nav  className="flex flex-row items-center w-11/12 mx-auto mt-8">
        <div className="flex flex-row justify-start items-start mr-auto cursor-pointer">
          <img src={Logo}
          className="w-16"
          />
          <div className="font-montserrat text-xl
          mt-3 font-bold leading-[31.5px]">Atom<span className="font-montserrat text-xl font-medium leading-[31.5px]">Bank</span></div>
        </div>

        <div className="flex flex-row gap-12 mr-auto">
          { NavLinks.map(link => (
            <li key={link.id}
              className="font-poppins font-medium text-base leading-[20px]
              list-none cursor-pointer"
            >
              {link.title}
            </li>
          ))}
        </div>

        <div className="flex flex-row gap-7">
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
      </nav>
    )
}  