import { Future, sArrow } from "../../assets"
import { ClickToAction } from ".."


export default function index() {
  return (
    <section className="flex flex-row items-center mt-28 gap-[125px]">
        <div>
            <div className="font-poppins text-4xl font-medium leading-[45px] mb-10 text-gray-800">
                <span className="font-bold">Atom</span>Bank for the Future
            </div>

            <p className="font-montserrat text-base font-medium leading-6 text-gray-400 mb-9">
                All conveniences are at hand. It's time to go ahead and make dreams<br />
                come true one by one. Open, manage and withdraw competitive<br />
                interest savings without going to the bank.
            </p>
            
            <ClickToAction
              text="Learn More"
              image={sArrow}
              clickWrap="flex flex-row gap-2 cursor-pointer"
              clickText="font-poppins font-medium text-green-600 text-base leading-5 underline decoration-2"
              clickImage="w-[20px] h-[20px]"
            />
        </div>
        <img src={Future} alt="future" />
    </section>
  )
}
