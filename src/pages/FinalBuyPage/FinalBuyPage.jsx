import React from 'react';

const FinalBuyPage = () => {
    return ( 
        <div className=' w-3/4 items-center mt-8'>
            <div className=' flex items-center justify-center'>
                <p className='bg-amber-400 w-full p-4 text-2xl '>نهایی کردن خرید</p>
            </div>
            <div className='p-10 flex flex-col gap-y-10 justify-center w-full items-center'>
                <div className='flex gap-x-4 w-full justify-center '>
                <label htmlFor="" className='text-xl w-1/6'>نام و نام خانوادگی :</label>
                <input type="text" className='border-2 w-1/2 h-10'/>
            </div>
            <div className='flex gap-x-4 w-full justify-center'>
                <label htmlFor="" className='text-xl w-1/6 h-10'> شماره تماس:</label>
                <input type="text" className='border-2 w-1/2'/>
            </div>
            <div className='flex gap-x-4 w-full justify-center'>
                <label htmlFor="" className='text-xl w-1/6'> آدرس   :</label>
                <textarea className='border-2 w-1/2 h-16'></textarea>
            </div>
            <div className='flex gap-x-4 w-full justify-center'>
                <button className='text-2xl w-1/4 bg-amber-400 p-3 hover:text-emerald-50 '>پرداخت </button>
            </div>
            </div>
          
        </div>
     );
}
 
export default FinalBuyPage;