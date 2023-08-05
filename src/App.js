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
  const onChangeBasket = () => {
    setFavoriteToggle(false);
    setBasketToggle(!basketToggle);
  };
  const onChangeFavorite = () => {
    setFavoriteToggle(!favoriteToggle);
    setBasketToggle(false);
  };

  return (
    <div className="App">
      <Header
        onChangeFavorite={onChangeFavorite}
        onChangeBasket={onChangeBasket}
      />
      <Start
        favorite={favorite}
        setFavorite={setFavorite}
        basket={basket}
        setBasket={setBasket}
      />
      {favoriteToggle ? <Favorite favorite={favorite} /> : null}
      {basketToggle ? <Basket basket={basket} setBasket={setBasket}/> : null}
    </div>
  );
}

export default App;
