import Image from "next/image";

export default function EmailSucces() {
  return (
    <div className="flex justify-center items-center">
      <div className="bg-white p-10 flex flex-col justify-center sm:mt-[9rem] sm:w-[400px] sm:h-[420px] sm:rounded-3xl  w-full h-screen ">
      <div className="flex flex-col justify-center sm:mt-4 mt-24 gap-7">
      <Image src="assets/icon-success.svg" width={60} height={60} />
        <h1 className="text-4xl font-bold  text-[#232742]">Thanks for subscribing!</h1>
        <p className=" text-sm text-[#23232D] sm:mb-7">
          A confirmation email has been sent to
          <span className="font-bold "> gustavoy@gmail.com</span>. Please open
          it and click the button inside to confirm your subscription
        </p>
      </div>
        <div className="p-2 mt-auto sm:mb-3">
          <button
            className="flex justify-center items-center 
     text-white w-full bg-[#232742] rounded-md h-12
     hover:bg-custom-gradient
     "
          >
            Dimiss message
          </button>
        </div>
      </div>
    </div>
  );
}
