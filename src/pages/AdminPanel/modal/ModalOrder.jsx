import React from 'react';
import { AiFillGift, AiFillCloseSquare } from "react-icons/ai";

const ModalOrder = ({setModal}) => {
    return ( 
        <div className='flex flex-col border-4 w-96 p-8 gap-4'>
            <div className='flex w-full justify-between items-center'>
                <p className='text-amber-400 text-2xl'> نمایش سفارشات </p>
                <p className='hover:cursor-pointer text-xl' onClick={()=>setModal(false)}><AiFillCloseSquare/></p>
            </div>
            <div className='flex flex-row items-center justify-between w-full gap-x-4'>
                <label htmlFor=""> نام مشتری</label>
            </div>
            <div className='flex flex-row items-center justify-between w-full gap-x-4'>
                <label htmlFor=""> آدرس </label>
            </div>
            <div className='flex flex-row items-center justify-between w-full gap-x-4'>
                <label htmlFor=""> تلفن </label>
            </div>
        </div>
       
        
     );
}
 
export default ModalOrder;