import React from 'react';

const SelectPriceAndStock = () => {

    return ( 
        <div className='w-full  flex item-center justify-center flex-col'>
             
            <div className='w-full bg-amber-400 p-4 mb-4 flex items-center justify-between'>
                <div>
                <p className='text-2xl ml-4'>مدیریت سفارش ها</p>
                </div>
                <div className='flex space-x-4'>
                    <label htmlFor="">سفارشات در انتظار ارسال</label>
                    <input type="radio" name="ok" />
                
                    <label htmlFor="">سفارشات تحویل شده  </label>
                    <input type="radio" name="ok" />
                </div>
            </div>

            <table class="table-auto w-full">
                <thead className=''>
                    <tr className='w-full border-b-4 border-gray-400 mb-4'>
                        <th>نام کاربری</th>
                        <th>مجموع مبلغ</th>
                        <th>زمان ثبت سفارش</th>
                        <th>بررسی سفارشات</th>
                    </tr>
                </thead>
                <tbody>
                    <tr className='border-b-2 border-amber-400'>
                        <td className='pr-9'> مرتضی</td>
                        <td className='w-1/6'>92000</td>
                        <td className='w-1/6'>زمان ثبت شود</td> 
                        <td className='w-1/6'>بررسی سفارشات</td> 
                    </tr>  
                    {/* {product.map((item)=>{
                        return(
                    <tr className='border-b-2 border-amber-400'>
                        <td className='pr-9'>{item.name}</td>
                        <td className='w-1/6'> {item.price}</td>
                        <td className='w-1/6'> {item.stock}</td>
                    </tr>     
                        ) 

                    })}*/}
                </tbody>
            </table>        
        </div>

     );
}
 
export default SelectPriceAndStock;