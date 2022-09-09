import React from 'react';
import { Link } from 'react-router-dom';
import { AiFillGift, AiFillCloseSquare } from "react-icons/ai";

const LayOutAdmin = () => {
    return ( 
        <div className='flex flex-col gap-5 w-1/5 h-screen bg-amber-400 text-right sticky top-0 pr-16 pt-10 '>
                    <div className='flex gap-4 items-center hover:shadow-xl hover:cursor-pointer'>
                        <AiFillGift className='text-2xl '/>
                        <Link to="/selectProducts">
                          <p className='text-xl hover:text-white'>محصولات</p>    
                        </Link>
                    </div>
                    <div className='flex gap-4 items-center hover:shadow-xl hover:cursor-pointer'>
                        <AiFillGift className='text-2xl '/>
                        <Link to="/selectPriceAndStock" >
                        <p className='text-xl hover:text-white'>قیمت و موجودی</p> 
                        </Link>
                    </div>
                    <div className='flex gap-4 items-center hover:shadow-xl hover:cursor-pointer'>
                        <AiFillGift className='text-2xl '/>
                        <Link to="/selectOrders">
                          <p className='text-xl hover:text-white'>سفارشات</p> 
                        </Link>
                    </div>
                    <div className='flex gap-4 items-center hover:shadow-xl hover:cursor-pointer'>
                        <AiFillGift className='text-2xl '/>
                        <Link to="/">
                          <p className='text-xl hover:text-white'>صفحه سایت</p> 
                        </Link>
                    </div>
        </div>
     );
}
 
export default LayOutAdmin;