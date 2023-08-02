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
  const [onFavorite, setOnFavorite] = useState(false);

  useEffect(() => {
    localStorage.setItem("favoriteItem", JSON.stringify(favorite));
  }, [favorite]);
  const onChangeFavorite = () => {
    setOnFavorite(!onFavorite);
  };

  return (
    <div className="App">
      <Header onChangeFavorite={onChangeFavorite} />
      <Start favorite={favorite} setFavorite={setFavorite} />
      {onFavorite
        ? 
            <Favorite favorite={favorite} setOnFavorite={setOnFavorite}/>
      
        : null}
    </div>
  );
}

export default App;
