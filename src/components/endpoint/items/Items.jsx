import { FaBookmark } from "react-icons/fa";
import { BiSolidCartAdd } from "react-icons/bi";
export default function Items({ item, onAddBasket, favorite,basket, onAddFavorite }) {
  // console.log(item);
  const likeFavorite = favorite.some((basketEl) => basketEl.id === item.id)
  const liketBasket = basket.some((basketEl) => basketEl.id === item.id)
  return (
    <>
      <div className=" m-3 bg-[#746f6f] rounded-3xl ">
        <div className="" key={item.id}>
          <div className=" w-60 flex items-center justify-between text-center flex-col">
            <div className=" w-full flex items-center justify-center bg-white h-64 rounded-3xl">
              <img src={item.image} alt="" className=" w-36" />
            </div>
            <p className=" font-semibold  text-xl text-[#FFFFFF] ">
              {item.title.slice(0, 20)}
            </p>
            <div className=" w-40 flex justify-between py-3 ">
              <button
                onClick={() => onAddFavorite(item, item.id)}
                className={`  font-semibold  text-xl px-3 py-2 rounded-2xl ${likeFavorite ? " text-red-600 " : "text-[#746f6f]" }  bg-[#FFFFFF] `} 
              >
                <FaBookmark />
              </button>
              <button
                onClick={() => onAddBasket(item, item.id)}
              className={`font-serif text-2xl px-2 py-2 rounded-2xl ${liketBasket ? "text-red-600 " : "text-[#746f6f]"}  bg-[#FFFFFF]`}>
                <BiSolidCartAdd />
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
