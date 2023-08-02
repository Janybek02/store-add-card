export const Favorite = ({ favorite, setOnFavorite }) => {
  console.log(favorite);

  return (
    <div className=" absolute  top-12 w-full h-[215%] ">
      <div className=" w-full h-full bg-[#6968687d]">
        <div className="sticky z-1 left-48 top-2 flex flex-wrap justify-around  w-[600px] rounded-2xl bg-[#E5E4E9]">
          {favorite.map((favoriteItem) => {
            return (
              <div className=" flex flex-col w-[250px] bg-[#746f6f] rounded-2xl m-2  ">
                <div className=" w-[250px] rounded-xl bg-white h-[150px] flex items-center justify-center">
                  <img src={favoriteItem.image} className="w-[34%]" />
                </div>
                <div className=" mb-3 mx-[10px] text-xl text-center text-white">
                  <p>{favoriteItem.title.slice(0, 13)}</p>
                  <p className=" text-[9px] leading-normal">
                    {favoriteItem.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
