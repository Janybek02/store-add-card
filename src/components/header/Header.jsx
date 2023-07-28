import { NavLink } from "react-router-dom";

export default function Header () {
    return (
        <>
            <div className="header w-full h-12 bg-[#746f6f] flex items-center justify-center" >
                <div className="header__main w-2/4 flex justify-between items-center">
                    <div className="header--div">
                        <NavLink  to={""}className="text-2xl text-[#FFFFFF] font-family: 'Roboto Mono', monospace; hover:text-[#1b1b72] ">
                            Home 
                        </NavLink>
                    </div>
                    <div className="header--div">
                        <NavLink to={"/favorite"} className="text-2xl text-[#FFFFFF]">Favorite</NavLink>
                    </div>
                    <div className="header--div">
                        <NavLink to={"/Basket"} className="text-2xl text-[#FFFFFF]">Basket</NavLink>
                    </div>
                </div>
            </div>
        </>
    )
}