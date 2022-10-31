import axios from 'axios';
import React from 'react';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useCartActionS,useCart } from '../../Providers/cartProvider/cartProvider';
import { toast } from 'react-toastify';
import { checkInCart } from '../../Utils/Utils';



const styleBoxCategoryClass="flex flex-col justify-center items-center bg-gray-200	gap-y-4	hover:shadow-xl cursor-pointer mt-4"

const Category = () => {
    const {category}=useParams()
    // console.log("category is :",category)

    const [selectCategory,setSelectCategory]=useState([])

    const getData=()=>{
        axios.get("http://localhost:3001/products").then((res)=>{
            setSelectCategory(res.data)
        })
    }

    useEffect(()=>{
        getData()
    },[])


    const dispatch=useCartActionS();
    const {cart}=useCart()

    const addProductInCart=(product)=>{
        dispatch({type:"ADD_TO_CART", payload:product})
        toast.info(`${product.name}  به سبد خرید افزوده شد`)
      }

    const filterItemCategory=selectCategory.filter((item)=>item.category===category)
    // console.log("filterItemCategory:", filterItemCategory)

    return ( 
        <div className=' w-full flex md:flex-row flex-col items-center justify-center md:grid grid-cols-4 gap-x-8'> 
                {filterItemCategory.map((item)=>{
                    return(
                        <div className= {styleBoxCategoryClass}>
                            <div className='border-double'>
                                <img src={item.image} alt="" />
                            </div>
                            <div className='flex flex-row gap-3 h-full w-full item-center justify-center'> 
                            <p>نام محصول : {item.name}</p>
                            <p>قیمت: {item.price}</p>
                            </div>
                            <button onClick={()=>addProductInCart(item)} className={checkInCart(cart,item) ? "mb-4 w-3/4 p-2 bg-green-400 hover:text-white" : "mb-4 w-3/4 p-2 bg-amber-400 hover:text-white"}>
                                 {checkInCart(cart,item) ? "به سبد خرید افزوده شد" : "افزودن به سبد خرید"}
                            </button>
                        </div>
                    )

                })}               
            </div>
     );
}
 
export default Category;