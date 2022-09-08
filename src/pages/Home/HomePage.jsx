import React, { useEffect, useState } from 'react';
import { UserProductACtion, useProducts } from '../../components/category/categoryProvider';
import * as data from "./../../data"
const styleBoxCategoryClass="flex flex-col justify-center items-center bg-gray-200 h-52	gap-y-8	hover:bg-amber-400 hover:cursor-pointer"
const styleTitleProduct='bg-amber-400 w-1/4 h-24 absolute bottom-94 right-9 flex justify-center items-center hover:cursor-pointer'

// const pData=[...data.products]

const HomePage = () => {
    const {selectedItem}=UserProductACtion()
    // console.log(selectedItem)
    const sofa=data.products.filter((item)=>item.name==="مبل");
     const sofaCut=sofa.splice(0,5)
    const lamp=data.products.filter((item)=>item.name==="لامپ");
    const lampCut=lamp.splice(0,4)
    const chair=(data.products.filter((item)=>item.name==="صندلی"));
    const chairCut=chair.splice(0,4)
    const clock=data.products.filter((item)=>item.name==="ساعت");    
    const clockCut=clock.splice(0,4)

    return ( 
        <div className="flex flex-col justify-center items-center w-3/4 gap-y-7	mt-8">
            <div className=' banner w-full flex justify-center items-center'>
                    <img className='w-full h-80'  src="https://img.freepik.com/free-photo/mockup-wall-dark-living-room-interior-background-with-leather-sofa-table-empty-dark-wooden-wall-3d-rendering_41470-3585.jpg?w=740&t=st=1662542426~exp=1662543026~hmac=0a07ed86deb1b6aa4fc9d863a42053631fe4471f36a196dde2f6fa1441fcdf31" alt="" />
            </div>

            <div className=' w-full flex md:flex-row flex-col items-center justify-center md:grid grid-cols-4 gap-x-8'>
                <div className= {styleBoxCategoryClass}>
                    <div className='border-double' onClick={()=>selectedItem("لامپ")}>
                        <img src="https://xtratheme.ir/elementor/furniture/wp-content/uploads/sites/14/2019/09/i5.png" alt="" />
                    </div>
                    <p>لامپ</p>
                </div>
                <div className={styleBoxCategoryClass} onClick={()=>selectedItem("صندلی")}>
                    <div>
                        <img src="https://xtratheme.ir/elementor/furniture/wp-content/uploads/sites/14/2019/09/i1.png" alt="" />
                    </div>
                    <p>صندلی</p>
                </div>
                <div className={styleBoxCategoryClass} onClick={()=>selectedItem("ساعت")}>
                    <div>
                        <img src="https://xtratheme.ir/elementor/furniture/wp-content/uploads/sites/14/2019/09/i6.png" alt="" />
                    </div>
                    <p>ساعت</p>
                </div>
                <div className={styleBoxCategoryClass} onClick={()=>selectedItem("مبل")}>
                    <div>
                        <img src="https://xtratheme.ir/elementor/furniture/wp-content/uploads/sites/14/2019/09/i2.png" alt="" />
                    </div>
                    <p>مبل</p>
                </div>
                
            </div>

            <div className="flex justify-center items-center h-32 mb-8">
                <h3 className="text-6xl	text-amber-400">محصولات جدید</h3>
            </div>

            <div className='w-full relative flex flex-col'>
                <div className='h-10 bg-black '>black</div>
                <div className={styleTitleProduct}>
                    <p className='text-4xl text--400 text-center'>صندلی</p>
                </div>
                <div className='flex md:grid grid-cols-4 gap-4 flex-col w-full mt-4'>
                    {chairCut.map((item)=>{
                        return(
                        <>
                        <div className="flex flex-col gap-6 hover:shadow-2xl  hover:text-amber-400 hover:cursor-pointer">
                            <td className="w-60 ">
                                <img className='w-full' src={item.image} alt="" />
                            </td>
                            <div className='flex justify-around item-center bg-gray-200 h-14'>
                                <td className='flex gap-1 items-center text-lg'> <p>نام کالا:</p> {item.name}</td>
                                <td className='flex gap-1 items-center'><p>قیمت:</p> $ {item.price}</td>
                            </div>
                        </div>
                        </>
                        )
                    })}
                </div>
            </div>
            <div className='w-full relative flex flex-col'>
                <div className='h-10 bg-black'>black</div>
                <div className={styleTitleProduct} >
                    <p className='text-4xl text--400 text-center'>ساعت</p>
                </div>
                <div className='flex md:grid grid-cols-4 gap-4 flex-col w-full mt-4'>
                    {clockCut.map((item)=>{
                        return(
                        <>
                        <div className="flex flex-col gap-6 hover:shadow-2xl  hover:text-amber-400 hover:cursor-pointer">
                            <td className="w-60 ">
                                <img className='w-full' src={item.image} alt="" />
                            </td>
                            <div className='flex justify-around item-center bg-gray-200 h-14'>
                                <td className='flex gap-1 items-center text-lg'> <p>نام کالا:</p> {item.name}</td>
                                <td className='flex gap-1 items-center'><p>قیمت:</p> $ {item.price}</td>
                            </div>
                        </div>
                        </>
                        )
                    })}
                </div>
            </div>
            <div className='w-full relative flex flex-col'>
                <div className='h-10 bg-black'>black</div>
                <div className={styleTitleProduct} >
                    <p className='text-4xl text--400 text-center'>لامپ</p>
                </div>
                <div className='flex md:grid grid-cols-4 gap-4 flex-col w-full mt-4'>
                    {lampCut.map((item)=>{
                        return(
                        <>
                        <div className="flex flex-col gap-6 hover:shadow-2xl  hover:text-amber-400 hover:cursor-pointer">
                            <td className="w-60 ">
                                <img className='w-full' src={item.image} alt="" />
                            </td>
                            <div className='flex justify-around item-center bg-gray-200 h-14'>
                                <td className='flex gap-1 items-center text-lg'> <p>نام کالا:</p> {item.name}</td>
                                <td className='flex gap-1 items-center'><p>قیمت:</p> $ {item.price}</td>
                            </div>
                        </div>
                        </>
                        )
                    })}
                </div>
            </div>
            <div className='w-full relative flex flex-col'>
                <div className='h-10 bg-black'>black</div>
                <div className={styleTitleProduct} >
                    <p className='text-4xl text--400 text-center'>مبل</p>
                </div>
                <div className='flex md:grid grid-cols-4 gap-4 flex-col w-full mt-4'>
                    {sofaCut.map((item)=>{
                        return(
                        <>
                        <div className="flex flex-col gap-6 hover:shadow-2xl  hover:text-amber-400 hover:cursor-pointer">
                            <td className="w-60 ">
                                <img className='w-full' src={item.image} alt="" />
                            </td>
                            <div className='flex justify-around item-center bg-gray-200 h-14'>
                                <td className='flex gap-1 items-center text-lg'> <p>نام کالا:</p> {item.name}</td>
                                <td className='flex gap-1 items-center'><p>قیمت:</p> $ {item.price}</td>
                            </div>
                        </div>
                        </>
                        )
                    })}
                </div>
            </div>
        </div>
     );
}
 
export default HomePage;