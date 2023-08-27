import { AiOutlineClose } from "react-icons/ai";

export const Favorite = ({ favorite, onAddBasket, onAddFavorite, basket }) => {
  // const find = basket.some((el ) => favorite.some((fav) => { el.id === fav.id}))
  // console.log(find);
  return (
    <div className=" absolute  top-12 w-full h-[215%] ">
      <div className=" w-full h-full bg-[#69686836]">
        <div className="sticky z-1 left-48 top-2 flex flex-wrap justify-around  w-[600px] rounded-2xl bg-[#E5E4E9]">
          {favorite.map((favoriteItem) => {
            return (
              <div>
                <div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                  <div className="w-full flex items-center justify-center p-4">
                    <img
                      className="rounded-t-lg w-[50%]"
                      src={favoriteItem.image}
                      alt=""
                    />
                  </div>
                  <div class="p-5">
                    <a href="#">
                      <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                        {favoriteItem.title.slice(0, 20)}
                      </h5>
                    </a>
                    <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
                      {favoriteItem.description.slice(0, 50)}
                    </p>
                    <div className=" w-full flex justify-between">
                      <button
                        onClick={() =>
                          onAddBasket(favoriteItem, favoriteItem.id)
                        }
                        class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                      >
                        Add to card
                        <svg
                          class="w-3.5 h-3.5 ml-2"
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 14 10"
                        >
                          <path
                            stroke="currentColor"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M1 5h12m0 0L9 1m4 4L9 9"
                          />
                        </svg>
                      </button>
                      <button
                        onClick={() =>
                          onAddFavorite(favoriteItem, favoriteItem.id)
                        }
                        class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                      >
                        Delete on favorite
                        <AiOutlineClose className=" text-xl top-1 font-bold" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
