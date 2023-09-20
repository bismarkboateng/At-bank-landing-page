import { Laptop, Mobile, Arrow } from "../../assets"
import { Button, ClickToAction } from ".."


export default function index() {
    return (
      <section className="flex flex-col md:flex-col lg:flex-row md:mt-[120px] lg:mt-[150px]">
        <div className="mr-auto ml-[9%] mb-20 md:mb-32 lg:mb-32">

          <div className="mt-20 relative font-poppins font-medium text-[56px] leading-[70px] mb-12 text-gray-800">
            Easy Way to<br />
            Save your Money<br />
            with <span className="font-bold">Atom<span className="font-medium">Bank.</span></span>
            <div className="absolute top-0 left-0 bg-green-500 w-1 h-0.5" />
          </div>

          <p className="font-montserrat font-medium text-xs leading-[18px] text-gray-400 mb-10">
            The best place to transact and save money.We make all payments easier<br />
            and simplier. Receive and send payment funds without cash.
          </p>

          <div className="flex flex-row items-center gap-9">
            <Button
                className="bg-gray-800 py-4 px-8 rounded-xl font-medium font-poppins text-base text-white leading-[20px]"
            >
              Download Now
            </Button>

            <ClickToAction
              text="See How It Works"
              image={Arrow}
              clickWrap="flex flex-row gap-2 cursor-pointer"
              clickText="font-medium text-gray-400 text-base leading-5 underline decoration-2"
              clickImage="w-[20px] h-[20px]"
            />

          </div>
        </div>

        <div className="mb-20 relative mr-5">
          <img src={Laptop} alt="laptop" className="ml-5 w-[80%] md:ml-5 lg:ml-0 md:w-5/6 lg:w-full" />
          <img src={Mobile} alt="mobile"
            className="absolute top-[-15px] left-[100px] w-[150px]
            md:absolute md:top-[-15px] md:left-[140px] md:w-[260px]
            lg:absolute lg:top-[-15px] lg:left-[180px] lg:w-[300px]"
          />
        </div>

      </section>
    )
}