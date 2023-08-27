import { useEffect, useState } from "react";
import "./App.css";
import { Favorite } from "./components/header/favorite/Favorite";
import Start from "./components/endpoint/Start";
import Header from "./components/header/Header";
import { Basket } from "./components/header/basket/Basket";

function App() {
  const [favorite, setFavorite] = useState(
    JSON.parse(localStorage.getItem("favoriteItem")) || []
  );
  const [basket, setBasket] = useState(
    JSON.parse(localStorage.getItem("basketItem")) || []
  );
  const [favoriteToggle, setFavoriteToggle] = useState(false);
  const [basketToggle, setBasketToggle] = useState(false);
  useEffect(() => {
    localStorage.setItem("basketItem", JSON.stringify(basket));
    localStorage.setItem("favoriteItem", JSON.stringify(favorite));
  }, [favorite, basket]);

  const onAddFavorite = (basketItem, id) => {
    const find = favorite.some((el) => (el.id === id ? true : false));
    if (find) {
      setFavorite((current) =>
        current.filter((filBasket) => filBasket.id !== id)
      );
    } else setFavorite((current) => [...current, basketItem]);
    // favBasFind(id,)
  };

  const onAddBasket = (basketItem, id) => {
    basketItem.quan = 1;
    // console.log(basketItem);
    const find = basket.some((el) => (el.id === id ? true : false));
    if (find) {
      setBasket((current) =>
        current.filter((filBasket) => filBasket.id !== id)
      );
    } else setBasket((current) => [...current, basketItem]);
  };

  const onChangeBasket = () => {
    // basketScroll()
    setFavoriteToggle(false);
    setBasketToggle(!basketToggle);
  };
  const onChangeFavorite = () => {
    setFavoriteToggle(!favoriteToggle);
    setBasketToggle(false);
  };
  const startProps = (
    <Start
      favorite={favorite}
      setFavorite={setFavorite}
      basket={basket}
      setBasket={setBasket}
      onAddFavorite={onAddFavorite}
      onAddBasket={onAddBasket}
    />
  );

  return (
    <div className="App">
      <Header
        basket={basket}
        favorite={favorite}
        onChangeFavorite={onChangeFavorite}
        onChangeBasket={onChangeBasket}
      />

      {favoriteToggle ? (
        <Favorite
          favorite={favorite}
          onAddBasket={onAddBasket}
          basket={basket}
          onAddFavorite={onAddFavorite}
        />
      ) : null}
      {basketToggle ? (
        <Basket basket={basket} setBasket={setBasket}  onAddBasket={onAddBasket} />
      ) : (
        startProps
      )}
    </div>
  );
}

export default App;
