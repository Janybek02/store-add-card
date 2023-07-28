export const LoandingCard = () => {
  return (
    <>
      <div className=" m-3 bg-[#8d8b8b] rounded-3xl ">
        <div className="">
          <div className=" w-60 flex items-center justify-between text-center flex-col">
            <div className=" w-full flex items-center justify-center bg-white h-64 rounded-3xl"></div>
            <div className=" flex flex-col ml-20  w-full ml-23">
            <div className=" font-sarif rounded-xl w-28 mt-2 h-3 bg-white text-xl text-[#FFFFFF] "></div>
            <div className=" font-sarif rounded-xl w-24 mt-2 h-3 bg-white text-xl text-[#FFFFFF] "></div>
            </div>
            
            <div className=" w-40 flex justify-between py-3 ">
              <button className=" font-serif text-xl px-5 py-5 rounded-2xl text-[#746f6f] bg-[#FFFFFF] "></button>
              <botton className="font-serif text-2xl px-5 py-5 rounded-2xl text-[#746f6f] bg-[#FFFFFF]"></botton>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
