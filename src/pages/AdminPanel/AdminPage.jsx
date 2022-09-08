import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { AiFillGift, AiFillCloseSquare } from "react-icons/ai";
import * as data from "./../../data";
import SelectProduct from './SelectProduct';
import SelectPriceAndStock from './SelectPriceAndStock';
import SelectOrders from "./SelectOrders";
import ModalSave from './modal/ModalSave';
import ModalOrder from "./modal/ModalOrder";
const AdminPage = () => {

         
    const [showDashbord,setShowDashbord]=useState("")
    
    const changeProducts=(enterName)=>{
        setShowDashbord(enterName)
    }


    useEffect(()=>{
        console.log(showDashbord)
    },[showDashbord])

    return ( 
          <div className='flex w-full p-4 max-h-screen gap-2'>
                <div className='flex flex-col gap-5 w-1/5 bg-amber-400 text-right  pr-16'>
                    <div className='flex gap-4 items-center hover:shadow-xl hover:cursor-pointer'>
                        <AiFillGift className='text-2xl '/>
                        <Link to="/selectProducts">
                          <p className='text-xl hover:text-white'>محصولات</p>    
                        </Link>
                    </div>
                    <div className='flex gap-4 items-center hover:shadow-xl hover:cursor-pointer'>
                        <AiFillGift className='text-2xl '/>
                        <p className='text-xl hover:text-white' onClick={()=>changeProducts("قیمت و موجودی")}>قیمت و موجودی</p> 
                    </div>
                    <div className='flex gap-4 items-center hover:shadow-xl hover:cursor-pointer'>
                        <AiFillGift className='text-2xl '/>
                        <Link to="/">
                          <p className='text-xl hover:text-white' onClick={()=>changeProducts("سفارشات")}>سفارشات</p> 
                        </Link>
                    </div>
                </div>

                <div className='flex w-3/4'>
                    {showDashbord==="محصولات" && 
                        <SelectProduct/> 
                        // <ModalSave/>
                    }
                    {showDashbord==="قیمت و موجودی" && 
                        <SelectPriceAndStock/>
                    }
                    {showDashbord==="سفارشات" && 
                        <SelectOrders/>
                        // <ModalOrder/>
                    }
                </div>
            </div>
        );
}
 
export default AdminPage;