import { NavLink } from "react-router-dom";
import {BsFillBookmarkCheckFill} from "react-icons/bs"
export default function Header({onChangeFavorite}) {
  return (
    <>
      <div className="header w-full h-12 bg-[#746f6f] flex items-center justify-center">
        <div className="header__main w-2/4 flex justify-between items-center">
          <div className="header--div">
            <button
                onClick={onChangeFavorite}
            className=" text-2xl text-[#746f6f]   w-32 h-8 bg-white  rounded-md  focus:border-1 flex justify-around items-center ">
              Favorite  <BsFillBookmarkCheckFill/>
            </button>
          </div>
          <div className="header--div">
            <button className=" text-2xl text-white text-center w-32 h-8 bg-black rounded-md ">
              Basket
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
