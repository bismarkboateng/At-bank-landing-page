import { Account } from "../../assets"

export default function index() {
  return (
    <div className="flex flex-row gap-2 relative w-[600px] mt-[50px] ml-[150px]">
        <img src={Account} alt="secure" className=""/>
        <div className="absolute top-0 left-[230px] mt-[35px]">
            <div className="font-montserrat font-bold text-[21px] leading-[26.25px] text-gray-100 mb-4">
                Control over your<br />
                account
            </div>
            <p className="font-medium text-gray-300 text-xs leading-[18px]">
                Your bank account lets you easyly lock your<br />
                card in the app. and later reorder it with a<br />
                tap of a button.
            </p>
        </div>
    </div>
  )
}
