import React from "react";
import "./styleCart.css";
import {
  AiOutlineCloseCircle,
  AiFillPlusSquare,
  AiFillMinusSquare,
} from "react-icons/ai";

import {
  useCart,
  useCartActionS,
} from "../Providers/cartProvider/cartProvider";
import { Link } from "react-router-dom";

const Cart = () => {
  const { cart, total } = useCart();
  const dispatch = useCartActionS();
  const incHandler = (cartItem) => {
    dispatch({ type: "ADD_TO_CART", payload: cartItem });
  };
  const decHandler = (cartItem) => {
    dispatch({ type: "DEC_TO_CART", payload: cartItem });
  };

  if (!cart.length) {
    return (
      <div className="cartPageIsNoting w-full">
        <h2 className="text-2xl"> هنوز هیچ محصولی را انتخاب نکرده اید !</h2>
      </div>
    );
  }

  return (
    <>
      <div className="cart">
        <h2 className="hederCart text-2xl">سبد خرید شما</h2>
        <div className="boxProductCart">
          <div className="cartProduct">
            <table>
              <thead>
                <tr>
                  <th>حذف</th>
                  <th>عکس محصول</th>
                  <th>نوع محصول</th>
                  <th>Price</th>
                  <th>قیمت</th>
                  <th>جمع کل خرید</th>
                </tr>
              </thead>

              <tbody>
                {cart.map((item) => (
                  <tr>
                    <td className="boxRemove">
                      <AiOutlineCloseCircle />
                    </td>
                    <td className="imageCart">
                      <img src={item.image} alt="" />
                    </td>
                    <td>{item.name}</td>
                    <td>{item.price}</td>
                    <td className="boxNumber">
                      <p onClick={() => incHandler(item)}>
                        <AiFillPlusSquare />
                      </p>
                      <h2>{item.quantity}</h2>
                      <p onClick={() => decHandler(item)}>
                        <AiFillMinusSquare />
                      </p>
                    </td>
                    <td>{item.price * item.quantity}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div>
            <CartSummery />
          </div>
        </div>
      </div>
    </>
  );
};

export default Cart;

const CartSummery = () => {
  const {cart, total}= useCart()

  const originalTotalPrice=cart.length ? cart.reduce((acc,curr)=>acc+curr.quantity*curr.price,0):0;
  return (
    <div className="cartSummery">
      <h3 className="text-center pb-4 text-xl">فاکتور خرید شما</h3>
      <div>
        <p>جمع فاکتور بدون  تخفیف</p>
        <h4> ${originalTotalPrice}</h4>
      </div>

      <div>
        <p>تخفیف اجناس</p>
        <h4>${originalTotalPrice-total}</h4>
      </div>

      <hr />
      <div >
        <p>مبلغ قابل پرداخت</p>
        <h4>${total}</h4>
      </div >
      <div className="pt-4 flex justify-center items-center">
        {/* <Link to="/singUpPage?redirect=checkOutPage" className="w-full p-2 ">
          <button className="hover:text-amber-400">وارد صفحه پرداخت شوید!</button>
        </Link> */}
        <Link to="/finalBuyPage" className="w-full p-2">
          <button className="hover:text-amber-400">وارد صفحه پرداخت شوید!</button>
        </Link>
      </div>
    </div>
  );
};
