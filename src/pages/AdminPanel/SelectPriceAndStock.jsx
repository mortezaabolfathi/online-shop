import React from 'react';
import * as data from "../../data";

const SelectPriceAndStock = () => {
    const product=data.products;

    return ( 
        <div className='w-full flex item-center justify-center flex-col'> 

            <div className='w-full bg-amber-400 p-4 mb-4 flex items-center justify-between'>
                <div>
                <p className='text-2xl ml-4'> مدیریت موجودی و قیمت ها </p>
                </div>
                <div className='flex space-x-4'>
                   <button className='p-4 bg-gray-200 hover:shadow-2xl	hover:cursor-pointer'>ذخیره</button>
                </div>
            </div>

        <table class="table-auto w-full">
            <thead className=''>
                <tr className='w-full border-b-4 border-gray-400 mb-4'>
                    <th>نام کالا</th>
                    <th>قیمت</th>
                    <th>موجودی</th>
                </tr>
            </thead>
            <tbody>
                {product.map((item)=>{
                    return(
                <tr className='border-b-2 border-amber-400'>
                    <td className='pr-9'>{item.name}</td>
                    <td className='w-1/6'> {item.price}</td>
                    <td className='w-1/6'> {item.stock}</td>
                </tr>     
                    )

                })}
            </tbody>
        </table>        
        </div>

     );
}
 
export default SelectPriceAndStock;