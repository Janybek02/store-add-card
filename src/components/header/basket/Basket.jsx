import { useState } from "react";
import BasketEmty from "./basketEmty/BasketEmty";
import Check from "./basketCheck/Check";
export const Basket = ({ basket, setBasket, onAddBasket }) => {
  const quantityPlus = (id) => {
    const newPlusedBasketItems = basket.map((el) => {
      if (el.id === id) {
        const quan = el.quan + 1;
        const price = quan * el.price;
        console.log(quan);
        return { ...el, quan, price };
      } else return el;
    });
    console.log(newPlusedBasketItems);
    setBasket(newPlusedBasketItems);
  };
  const quantityMinus = (id) => {
    const newMinusedBasketItems = basket.map((item) => {
      if (id === item.id) {
        if (item.quan > 1) {
          let quan = item.quan - 1;
          const price = item.price / item.quan;
          console.log(quan);
          return { ...item, quan, price };
        } else return item;
      } else return item;
    });

    setBasket(newMinusedBasketItems);
  };

  return (
    <div className=" w-full  absolute top-12 flex justify-center items-centerer  bg-white p-3 max-[550px]:p-[10px] ">
      <div className="w-[90%] max-[1000px]:w-full border-solid border-2 border-inherit ">
        <h1 className=" font-semibold text-center text-4xl">Shoping card</h1>
        {
          basket.length ? 
        
        <div className=" flex justify-around  max-[650px]:flex-col-reverse">
          <div>
           {
            basket.map((basketItem) => {
              return (
                <div>
                  <div class="  w-[95%] max-[760px]:p-3 p-6 flex items-center  m-2 bg-[#f2ececd7] border border-gray-200 rounded-lg  ">
                    <a href="" className=" w-[200px] h-[250px] max-[950px]:h-[200px] max-[550px]:h-[150px] flex items-center justify-center rounded-2xl bg-white ">
                      <img
                        className=" w-[70%] max-[770px]:w-[80%] rounded-t-lg "
                        src={basketItem.image}
                        alt="product image"
                      />
                    </a>
                    <div class="px-5 w-[400px] max-[900px]:w-[100%] pb-5  " >
                      <div className="" href="#">
                        <h5 class="text-xl  max-[950px]:text-[18px] max-[550px]:text-[14px] font-semibold tracking-tight dark:text-white">
                          {basketItem.description.slice(0, 100)}
                        </h5>
                      </div>
                      <div class="flex items-center mt-2.5 mb-2">
                        <svg
                          class="w-4 h-4 text-yellow-300 mr-1"
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="currentColor"
                          viewBox="0 0 22 20"
                        >
                          <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                        </svg>
                        <svg
                          class="w-4 h-4 text-yellow-300 mr-1"
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="currentColor"
                          viewBox="0 0 22 20"
                        >
                          <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                        </svg>
                        <svg
                          class="w-4 h-4 text-yellow-300 mr-1"
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="currentColor"
                          viewBox="0 0 22 20"
                        >
                          <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                        </svg>
                        <svg
                          class="w-4 h-4 text-yellow-300 mr-1"
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="currentColor"
                          viewBox="0 0 22 20"
                        >
                          <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                        </svg>
                        <svg
                          class="w-4 h-4 text-gray-200 dark:text-gray-600"
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="currentColor"
                          viewBox="0 0 22 20"
                        >
                          <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                        </svg>
                        <span class="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ml-3">
                          {basketItem.rating.rate}
                        </span>
                      </div>
                      <div class="flex items-center space-x-3">
                        <button
                          onClick={() => quantityMinus(basketItem.id)}
                          class="inline-flex items-center justify-center p-1 text-sm font-medium h-6 w-6 text-gray-500 bg-white border border-gray-300 rounded-full focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
                          type="button"
                        >
                          <span class="sr-only">Quantity button</span>
                          <svg
                            class="w-3 h-3"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 18 2"
                          >
                            <path
                              stroke="currentColor"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-width="2"
                              d="M1 1h16"
                            />
                          </svg>
                        </button>
                        <div>
                          <div
                            id="first_product"
                            class="bg-gray-50 w-14 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block px-2.5 py-1 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                          >
                            {basketItem.quan}
                          </div>
                        </div>
                        <button
                          onClick={() => quantityPlus(basketItem.id)}
                          class="inline-flex items-center justify-center h-6 w-6 p-1 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-full focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
                          type="button"
                        >
                          <span class="sr-only">Quantity button</span>
                          <svg
                            class="w-3 h-3"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 18 18"
                          >
                            <path
                              stroke="currentColor"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-width="2"
                              d="M9 1v16M1 9h16"
                            />
                          </svg>
                        </button>
                      </div>
                      <div class="flex items-center justify-between">
                        <span class="text-3xl max-[950px]:text-2xl font-bold text-gray-900 dark:text-white">
                          ${basketItem.price}
                        </span>
                        <button
                            onClick={() => onAddBasket(basketItem, basketItem.id)}
                        class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                          Delete item 
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })
          } 
          </div>
          

          <div className="p-3">
             <Check basket={basket}/>
            
           
          </div>
        </div> : <BasketEmty/>
}
      </div>
    </div>
  );
};
