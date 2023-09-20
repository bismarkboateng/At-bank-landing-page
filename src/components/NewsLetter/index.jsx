import { Button } from ".."


export default function index() {
    return (
      <section className="p-20 w-full md:w-full lg:w-full bg-gray-100 flex flex-col justify-start items-start md:flex-col
        lg:justify-center lg:items-center
        lg:px-[409px] lg:py-[61px]">

        <div className="font-poppins font-medium leading-[45px] text-4xl text-gray-800 mb-5">
          Subsribe Newsletter
        </div>

        <p className="font-montserrat font-medium leading-6 text-base text-gray-400 mb-10">
          Financial transactions remotely using mobile
        </p>

        <div className="flex flex-col md:flex-col lg:flex-row gap-10">
          <input 
            placeholder="Enter your email"
            className="pt-3 pb-3 md:w-[400px] lg:w-[437px] border border-gray-300 outline-none bg-white rounded-xl pl-7
            placeholder:font-poppins placeholder:font-medium placeholder:text-base placeholder:leading-5"
          />
          <Button
            className="w-[200px] bg-gray-800 py-4 
              px-8 rounded-xl font-medium 
              font-poppins text-base text-white 
              leading-[20px]"
          >
            Get Started
          </Button>
        </div>

      </section>
    )
}  