import React from 'react';

const OffLineShop = () => {
    return ( 
        <div className='flex flex-row gap-6 w-3/4 h-3/4 mt-4'>
            <div className='flex items-center justify-center w-1/4 h-full border-2'>
                <img src="" alt="" />
                سمت راست جای عکس
            </div>
            <div className='flex flex-col  gap-8 text-right p-10 w-3/4 h-full border-2'>
                <p className='text-2xl text-amber-400 '>کالای فلان</p>
                <p  className='text-xl text-amber-400 '> قیمت</p>
                <div className='flex justify-center'>
                    <button className='w-1/2 p-2 bg-amber-400'>افزودن به سبد خرید</button>
                </div>
            </div>
        </div>
     );
}
 
export default OffLineShop;