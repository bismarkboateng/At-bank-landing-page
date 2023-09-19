import { Easy, appleBadge, googleBadge } from "../../assets"


export default function index() {
  return (
    <section className="flex flex-row gap-32 items-center">

      <img src={Easy} alt="phone" />

      <div>
        <div className="font-poppins text-4xl font-medium leading-[45px] mb-10 text-gray-800">
          <span className="font-bold">Atom</span>Bank App for Your Easy
        </div>

        <p className="font-medium font-montserrat text-base text-gray-400 leading-6 mb-9">
         The best place to transact and save money. More organized finances no<br />
         longer a discourse. Enjoy the life you want, without wasting time on<br />
         unnecessary financial matters
        </p>

        <div className="flex flex-row gap-6">
          <img src={googleBadge} alt="google" />
          <img src={appleBadge} alt="apple" />
        </div>

      </div>

    </section>
  )
}