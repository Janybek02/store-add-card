const Check = ({ basket }) => {

   
  return (
    <>
      <div class=" w-[100%] bg-white border border-gray-200 rounded-lg shadow p-2 dark:bg-gray-800 dark:border-gray-700">
        <div class="flex items-center justify-between mb-4">
          <h5 class="text-xl font-bold leading-none text-gray-900 dark:text-white">
            All the summ
          </h5>
        </div>
        <div class=" w-[200px] max-[900px]:w-[155px]">
          <ul role="list" class="divide-y divide-gray-200 dark:divide-gray-700">
            {basket.map((item) => {
              return (
                <li class="py-2 ">
                  <div class="flex  items-center space-x-4">
                    <div class="flex-shrink-0 rounded-full">
                      <img
                        class="w-10  h-10 sm:p-1  p-1 rounded-full "
                        src={item.image}
                        alt="Neil image"
                      />
                    </div>
                    <div class=" max-[1200px]:w-[80%] max:w-2">
                      <p class="text-sm  font-medium text-gray-900 truncate dark:text-white">
                        {item.title.slice(0,5)}...
                      </p>
                    </div>
                    <div class=" text-base font-semibold text-gray-900 dark:text-white">
                      ${item.price}
                    </div>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
     
        
<div class="w-[90%] bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
    <ul class="hidden text-sm font-medium text-center text-gray-500 divide-x divide-gray-200 rounded-lg sm:flex dark:divide-gray-600 dark:text-gray-400" id="fullWidthTab" data-tabs-toggle="#fullWidthTabContent" role="tablist">
        <li class="w-[100%] max-[1140px]:w-[90%]">
            <div id="stats-tab" data-tabs-target="#stats" type="button" role="tab" aria-controls="stats" aria-selected="true" class="inline-block w-full p-4 rounded-tl-lg bg-gray-50 hover:bg-gray-100 focus:outline-none dark:bg-gray-700 dark:hover:bg-gray-600">
                <p className="">
                    All summ {basket.map((a) => a.price + a.price)}
                </p>
            </div>
        </li>
        
    </ul>
    
</div>

    
    </>
  );
};

export default Check;
