import { Security } from "../../assets"

export default function index() {
  return (
    <div className="flex flex-row gap-2 relative w-[600px] mt-[50px] ml-[150px]">
        <img src={Security} alt="secure" className=""/>
        <div className="absolute top-0 left-[230px] mt-[35px]">
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
