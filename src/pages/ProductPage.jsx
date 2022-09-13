import React, { useCallback, useEffect, useState } from 'react';
import "./styleProductPage.css"
import * as data from "./../data";
import {useCart, useCartActionS} from "../Providers/cartProvider/cartProvider"
import { checkInCart } from '../Utils/Utils';
import { toast } from 'react-toastify';
import { Link } from 'react-router-dom';
import axios from 'axios';



const ProductPage = () => {

  const [selectItem,setSelectItem]=useState([])

  const dispatch=useCartActionS()


  const addProductInCart=(product)=>{
    dispatch({type:"ADD_TO_CART", payload:product})
    toast.info(`${product.name}  به سبد خرید افزوده شد`)
  }
  
  const getData=()=>{
    axios.get("http://localhost:3001/products").then((res)=>{
      setSelectItem(res.data)
    })
  }
  useEffect(()=>{
    getData()
  },[])

  const changeHandlerSelect=(e)=>{
    if(e.target.value==="All" || e.target.value===""){
      getData()
    }else{
      const filterItem=selectItem.filter((item)=>item.name===e.target.value);
      setSelectItem(filterItem)
    }
  }

  const changeHandlerBySort=(e)=>{
    const productsCLone=[...data.products];
    // console.log("productsCLone is:", productsCLone)
    // console.log(e.target.value)
    if(e.target.value==="lowest"){
      const sortPrice=productsCLone.sort((a,b)=>{
        if(a.price>b.price){
          return 1;
        }
        if(a.price<b.price){
          return -1;
        }
        return 0
      })
      console.log(sortPrice)
      setSelectItem(sortPrice)
    }
    if(e.target.value==="highest"){
      const sortPrice=productsCLone.sort((a,b)=>{
        if(a.price<b.price){
          return 1;
        }
        if(a.price>b.price){
          return -1;
        }
        return 0
      })
      setSelectItem(sortPrice)

    }
  }

  
  const {cart}=useCart()

    return ( 
        <main>
          <div className='flex justify-around items-center w-1/2'> 
            <div className='flex flex-row items-center  gap-4'>
                  <label htmlFor="" className='text-amber-400'> مرتب سازی بر حسب قیمت :</label>
                  <select onChange={(e)=>changeHandlerBySort(e)}>
                      <option value="lowest">کمترین قیمت </option>
                      <option value="highest">بیشترین</option>
                  </select>
            </div>

            <div className='flex flex-row items-center  gap-4'>
            <label htmlFor="" className='text-amber-400'> فیلتر کردن : </label>
                  <select onChange={(e)=>changeHandlerSelect(e)}>
                      <option value="All">همه محصولات</option>
                      <option value="صندلی">صندلی</option>
                      <option value="ساعت">ساعت</option>
                      <option value="مبل">مبل</option>
                      <option value="لامپ">لامپ</option>
                  </select>
            </div>

          </div>

          <div className='bg-black w-full h-10 p-8 flex items-center gap-x-5 ' >
          <label htmlFor="" className='text-amber-400 text-2xl'> جستجوی کالا :</label>
            <input className='h-9 w-80' type="text" name="" id="" onChange={(e)=>changeHandlerSelect(e)} />
          </div>

          <section className='productList'>{selectItem.map((product)=>{
            return (
              
                <section className='product' key={product.id} >
                  <div className='productImg  '>
                    <Link to={`/product/${product.id}`}> 
                      <img src={product.image} alt={product.name} />
                    </Link>
                  </div>
                  <div>
                    <button onClick={()=>addProductInCart(product)}>
                      {checkInCart(cart,product) ? "به سبد خرید افزوده شد" : "افزودن به سبد خرید"}
                    </button>
                    <p>{product.name}</p>
                    <p className='text-xl'>قیمت: {product.price} تومان</p>
                  </div>
                </section>
          
            )
          })}
          </section>
          
        </main>
     );
}
 
export default ProductPage;