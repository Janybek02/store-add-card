import { NavLink } from "react-router-dom";
import { BsFillBookmarkCheckFill } from "react-icons/bs";
import { HiShoppingCart } from "react-icons/hi";
export default function Header({
  onChangeFavorite,
  onChangeBasket,
  basket,
  favorite,
}) {
  return (
    <>
      <div className="header w-full  h-16 bg-[#746f6f] flex items-center justify-center">
        <div className="header__main w-2/4  max-[700px]:w-2/3 max-[450px]:w-full  max-[450px]:mx-1 flex justify-between items-center">
          <div className="header--div">
            <button
              onClick={onChangeFavorite}
              type="button"
              class="relative inline-flex items-center px-5 py-2 text-xl max-[600px]:text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              <span className="mr-2 max-[600px]:text-xl">
                <BsFillBookmarkCheckFill />
              </span>
              <span class="sr-only">Notifications</span>
              Favorite
              {favorite.length ? (
                <div class="absolute inline-flex items-center justify-center w-6 h-6 text-xs  font-bold text-white bg-red-500 border-2 border-white rounded-full -top-2 -right-2 dark:border-gray-900">
                  {favorite.length}
                </div>
              ) : null}
            </button>
          </div>
          <div className="header--div">
            <button
              onClick={onChangeBasket}
              type="button"
              class="relative inline-flex items-center px-5 py-2 text-xl max-[600px]:text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              <span className="mr-2 text-2xl max-[600px]:text-xl mt-1">
                <HiShoppingCart />
              </span>
              <span class="sr-only">Notifications</span>
              Basket
              {basket.length ? (
                <div class="absolute inline-flex items-center justify-center w-6 h-6 text-xs  font-bold text-white bg-red-500 border-2 border-white rounded-full -top-2 -right-2 dark:border-gray-900">
                  {basket.length}
                </div>
              ) : null}
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
