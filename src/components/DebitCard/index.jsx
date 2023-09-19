import { DebitCard, sArrow } from "../../assets"
import { ClickToAction } from ".."


export default function index() {
  return (
   <section className="mt-28 flex flex-row gap-20 mb-20">
    <img src={DebitCard} alt="debit cards" />
    <div>
        <div className="font-poppins text-gray-800 font-medium text-4xl leading-[45px] mb-10">
            Costumable Debit Card
        </div>
        <p className="font-montserrat text-gray-400 font-medium text-base leading-6 mb-9">
            Choose a debit card design that suits you. Practically withdraw cash and<br />
            transact worldwide.
        </p>

        <ClickToAction
            text="Learn More"
            image={sArrow}
            clickWrap="flex flex-row gap-2 cursor-pointer"
            clickText="font-poppins font-medium text-green-600 text-base leading-5 underline decoration-2"
            clickImage="w-[20px] h-[20px]"
        />
    </div>
   </section>
  )
}
