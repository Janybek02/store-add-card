import { useEffect, useState } from "react";
import Items from "./items/Items";
import Loanding from "../loanding/Loanding";
import Categories from "./Categories/Categories";
export default function Start({favorite, setFavorite}) {
  const [state, setState] = useState([]);
  const [categories, setCategories] = useState([]);
  const [category, setCategory] = useState([]);
  const [massage, setMassage] = useState(false);
  const [categoryMassage, setCategoryMassage] = useState(false);

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
    }, 2000);
    fetchCategories();
  }, []);

  const handleOnSubmit = async (e) => {
    const value = e.target.value;
    const Url = "https://fakestoreapi.com/products/category/";
    const categoryUrl = await fetch(Url + value);
    const data = await categoryUrl.json();

    if (value === "all") setCategoryMassage(!categoryMassage);
    setCategory(data);
  };
  

  const onAddBasket = (basketItem, id) => {
    
    const find = favorite.some((el) => (el.id === id ? true : false));
    if (find) {
      setFavorite((current) =>
        current.filter((filBasket) => filBasket.id !== id)
      );
    } else setFavorite((current) => [...current, basketItem]);
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
              {(categoryMassage ? category : state).map((item) => (
                <Items item={item} favorite={favorite} onAddBasket={onAddBasket} />
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
