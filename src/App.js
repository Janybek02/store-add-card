
import { Route, Routes } from 'react-router-dom';
import './App.css';
import { Favorite } from './components/header/favorite/Favorite';
import Start from './components/endpoint/Start';
import Header from './components/header/Header';
import { Basket}  from './components/header/basket/Basket';
function App() {
  return (
    <div className="App">
      <Header/>

      <Routes>
      <Route path={""} element={ <Start/>} />
        <Route path={"/favorite"} element={<Favorite />} />
        <Route path={"/Basket"} element={<Basket/>} />
       
      </Routes>
     
    </div>
  );
}

export default App;
