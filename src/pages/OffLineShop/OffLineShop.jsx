import React from 'react';
import { useParams } from "react-router-dom";
import axios from 'axios';
import { useState, useEffect } from 'react';
import {useCart, useCartActionS} from "./../../Providers/cartProvider/cartProvider";
import {
    AiOutlineCloseCircle,
    AiFillPlusSquare,
    AiFillMinusSquare,
  } from "react-icons/ai";



const OffLineShop = () => {

    const [product,setProduct]=useState([])
    const [numberChoice,setNumberChoice]=useState(0)

    const {id}=useParams()
    
    const getData=()=>{
        axios.get(`http://localhost:3001/products/${id}`).then((res)=>{
            setProduct(res.data)

        }).catch(error=>{
            console.log("this is not valid")
        })
    }

    useEffect(()=>{
        getData()
      },[id])

      
  const dispatch=useCartActionS()
  const { cart, total } = useCart();

  const addProductInCart=(product)=>{
    dispatch({type:"ADD_TO_CART", payload:product})
  }

  const incHandler = (cartItem) => {
    dispatch({ type: "ADD_TO_CART", payload: cartItem });
    setNumberChoice(numberChoice+1)
  };
  const decHandler = (cartItem) => {
    dispatch({ type: "DEC_TO_CART", payload: cartItem });
    setNumberChoice(numberChoice-1)
    if(numberChoice===0){
        setNumberChoice(0)
    }
  };

    return (
     
        <div className='flex flex-row gap-6 w-3/4 h-3/4 mt-4'>
            <div className='flex items-center justify-between w-1/4 h-full border-2'>
                <img src={product.image} alt="" />
            </div>
            <div className='flex flex-col  gap-8 text-right p-10 w-3/4 h-full border-2'>
                <div className='flex flex-row gap-5 items-center'>
                    <h3>نام کالا:</h3>
                    <p className='text-2xl text-amber-400 '>{product.name}</p>
                </div>
                <div className='flex flex-row gap-5 items-center'>
                    <h3>قیمت کالا:</h3>
                    <p  className='text-xl text-amber-400 '> {product.price}تومان</p>
                </div>
                <div className='flex justify-center flex-row items-center gap-10'>
                    <button className='w-1/2 p-2 bg-amber-400' onClick={()=>addProductInCart(product)}>افزودن به سبد خرید</button>
                    <div className='bg-red-100 w-1/5 p-2 flex items-center gap-4 justify-center'>
                        <p onClick={() => incHandler(product)}>
                            <AiFillPlusSquare />
                        </p>
                            {numberChoice===0 ? (<h2>0</h2>): (<h2>{numberChoice}</h2>)}
                        <p onClick={() => decHandler(product)}>
                            <AiFillMinusSquare />
                        </p>

                        {/* <p onClick={() => incHandler(product)}>
                            <AiFillPlusSquare className='text-2xl hover:text-amber-400 cursor-pointer' />
                        </p>
                            {cart.length===0 ? (<h2>1</h2>): (<h2>{cart[0].quantity}</h2>)}
                        <p onClick={() => decHandler(product)}>
                            <AiFillMinusSquare  className='text-2xl hover:text-amber-400 cursor-pointer' />
                        </p> */}
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default OffLineShop;