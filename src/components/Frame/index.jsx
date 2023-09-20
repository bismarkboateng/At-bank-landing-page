import { Security } from "../../assets"

export default function index() {
  return (
    <div className="flex flex-col md:flex-col gap-2 relative w-[600px] mt-[50px] ml-[150px]">
        <img src={Security} alt="secure" className="w-[200px] lg:w-[300px]"/>
        <div className="flex flex-col md:absolute md:top-0 md:left-[230px] md:mt-[35px] lg:gap-0">
            <div className="font-montserrat font-bold text-[21px] leading-[26.25px] text-gray-100 mb-4">
                Fast and secure cashless<br />
                payments
            </div>
            <p className="font-medium text-gray-300 text-xs leading-[18px]">
                Pay with AtomBank app, online, and<br />
                in stores, and get added speed<br />
                security
            </p>
        </div>
    </div>
  )
}
