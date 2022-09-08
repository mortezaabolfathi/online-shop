import React from "react";
import { AiOutlineShoppingCart,AiOutlineUser } from "react-icons/ai";
import "./styleNavigation.css"
import { Link } from "react-router-dom";
import { useCart } from "../../Providers/cartProvider/cartProvider";

const styleHeaderBox="header sticky top-0 h-14 flex items-center justify-between p-3 bg-black text-white z-10";

const Navigation = () => {
  const {cart} =useCart()
  return (
    <header className={styleHeaderBox}>
      <nav >
        <ul>
          <li className="w-12">
            <Link to="/">
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzTsJY9J-8q9xRFT_0ShoqHwjOhqO2kXlWig&usqp=CAU" alt="" />
            </Link>
          </li>
          <li className="font-xl hover:text-amber-400 hover:cursor-pointer">
            <Link to="/">خانه</Link>
          </li>
          <li className=" hover:text-amber-400 hover:cursor-pointer">
            <Link to="/productPage">محصولات</Link>
          </li>
          <li className=" hover:text-amber-400 hover:cursor-pointer">
            <Link to="/cart">سبد خرید</Link>
          </li>
        </ul>
      </nav>

      <nav>
        <ul className="iconHeader">
          <Link to="/singUpPage">
          <li className="text-4xl hover:text-amber-400 hover:cursor-pointer"><AiOutlineUser/></li>
          </Link>
          <Link to="/cart">
          <li className="text-4xl hover:text-amber-400  hover:cursor-pointer" ><AiOutlineShoppingCart/></li>
          <h4 className="numberBuyProduct">{cart.length}</h4>
          </Link>


        </ul>
      </nav>
    </header>
  );
};

export default Navigation;
