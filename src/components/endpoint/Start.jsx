import { useEffect, useState } from "react";
import Items from "./items/Items";
import Loanding from "../loanding/Loanding";
import Categories from "./Categories/Categories";

export default function Start({
  favorite,
  setFavorite,
  onAddBasket,
  basket,
  onAddFavorite,
  setBasket,
}) {
  const [state, setState] = useState([]);
  const [categories, setCategories] = useState([]);
  const [category, setCategory] = useState([]);
  const [massage, setMassage] = useState(false);

  useEffect(() => {
    let urlData = "https://fakestoreapi.com/products/";
    const fetchCategories = async () => {
      try {
        const url = await fetch(urlData + "categories");
        const categoriesData = await url.json();
        setCategories(categoriesData);
      } catch (e) {
        console.log(e);
      }
    };

    const fetchData = async () => {
      try {
        const url = await fetch(urlData);
        const data = await url.json();
        setState(data);
        setMassage(true);
      } catch (e) {
        console.log(e);
      }
    };
    setTimeout(() => {
      fetchData();
    }, 1000);
    fetchCategories();
  }, []);

  const handleOnSubmit = async (e) => {
    const value = e.target.value;
    const Url = "https://fakestoreapi.com/products/category/";
    const categoryUrl = await fetch(Url + value);
    const data = await categoryUrl.json();
    setCategory(data);
    // console.log(category);
  };
  
  return (
    <>
      <div className="  bg-[#E5E4E9]">
        {massage ? (
          <div className="  bg-[#E5E4E9]">
            <div className=" w-5">
              <Categories
                categories={categories}
                handleOnSubmit={handleOnSubmit}
              />
            </div>
            <div className="flex flex-wrap justify-center bg-[#E5E4E9]">
              {(category.length ? category : state).map((item) => (
                <Items
                  item={item}
                  favorite={favorite}
                  onAddBasket={onAddBasket}
                  basket={basket}
                  onAddFavorite={onAddFavorite}
                />
              ))}
            </div>
          </div>
        ) : (
          <Loanding />
        )}
      </div>
    </>
  );
}
