import React from 'react';
import { AiFillGift, AiFillCloseSquare } from "react-icons/ai";

const ModalSave = ({setModalSAve,handleSave}) => {
    return ( 
      <form onSubmit={(e)=>handleSave(e)}>

        <div className='flex flex-col border-4 w-96 p-8 gap-4'>
            <div className='flex w-full justify-between items-center'>
                <p className='text-amber-400 text-2xl'>افزودن و ویرایش کالا</p>
                <p className='hover:cursor-pointer text-xl' onClick={()=>setModalSAve(false)}><AiFillCloseSquare/></p>
            </div>
            <div className='flex flex-row items-center justify-between w-full gap-x-4'>
                <label htmlFor="">تصویر کالا</label>
                <div>
                    <input type="file" className='border-2 w-full' name="image" />
                </div>
                <div>
                    <img src="" alt="" />
                </div>
            </div>
            <div className='flex flex-col items-center w-full'>
                <label htmlFor="" className='w-full text-right'>نام کالا</label>
                <div className='w-full'>
                   <input type="text" className='border-2 w-full' name="name"/>
                </div>
            </div>
            <div className='flex flex-col items-center w-full'>
                <label htmlFor="" className='text-right w-full'>دسته بندی</label>
                <div className='w-full'>
                <select id="" className='border-2 w-full' name="category">
                    <option value="دکوری ساعت">دکوری ساعت </option>
                    <option value="دکوری لامپ">دکوری لامپ</option>
                    <option value="دکوری مبلی"> دکوری مبلی </option>
                    <option value="دکور صندلی"> دکور صندلی </option>
                </select>
                </div>
            </div>
            <div className='flex flex-col items-center w-full'>
                <label htmlFor="" className='text-right w-full '>توضیحات </label>
                <div className='w-full'>
                <textarea className='h-16 border-2 w-full' name="description"></textarea>
                </div>
            </div>
            <div className='flex flex-col items-center w-full'>
                <button className='bg-amber-400 w-1/2 p-1' type="submit"  onClick={()=>setModalSAve(false)}>ذخیره</button>
            </div>
        </div>

      </form>
    
        
     );
}
 
export default ModalSave;