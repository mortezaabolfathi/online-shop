import axios from 'axios';
import React, { useEffect, useState } from 'react';
import LayOutAdmin from '../../layout/LayOutAdmin';
import Modal from "react-modal";
import ModalOrder from "./modal/ModalOrder";
import { AiFillGift, AiFillCloseSquare } from "react-icons/ai";
const SelectPriceAndStock = () => {

    const [order,setOrder]=useState([])
    const [modal,setModal]=useState(false)
    const [userId,setUserId]=useState(false)

    const getData=()=>{
        axios.get("http://localhost:3001/orders").then((res)=>{
            setOrder(res.data)
            // console.log(order)
        })
    }
    useEffect(()=>{
        getData()
    },[])

    const itemSelected=(enterId)=>{
        setModal(true)
        console.log(enterId)
        setUserId(order[enterId-1])
    }

    return ( 
        <div className='flex flex-row gap-4'>
            <LayOutAdmin/>
            <div className='w-3/4  flex item-center flex-col mt-4'>
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
                      
                <table className="table-auto w-full">
                    <thead className=''>
                        <tr className='w-full border-b-4 border-gray-400 mb-4'>
                            <th>نام کاربری</th>
                            <th>مجموع مبلغ</th>
                            <th>زمان ثبت سفارش</th>
                            <th>بررسی سفارشات</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* <tr className='border-b-2 border-amber-400'>
                            <td className='pr-9'> مرتضی ابوالفتحی</td>
                            <td className='w-1/6'>92000</td>
                            <td className='w-1/6'>زمان ثبت شود</td> 
                            <td className='w-1/6 hover:cursor-pointer hover:text-amber-400 ' onClick={()=>setModal(true)}>بررسی سفارشات</td> 
                        </tr>   */}
                        {order.map((item)=>{
                            return(
                        <tr className='border-b-2 border-amber-400 mt-2 h-14'>
                            <td className='pr-9'>{item.name}</td>
                            <td className='w-1/6'> {item.totalprice}</td>
                            <td className='w-1/6'>زمان ثبت شود</td> 
                            <td className='w-1/6 hover:cursor-pointer hover:text-white ' onClick={()=>itemSelected(item.id)}>
                                <button className='bg-amber-400 w-full p-2'>
                                بررسی سفارشات
                                </button>
                            </td>
                        </tr>     
                            ) 

                        })}
                    </tbody>
                </table>        
             </div>
             <Modal isOpen={modal} className="flex justify-center items-center w-full h-full bg-amber-400/5">
                    <div className='w-ful bg-white justify-center items-center'>
                    {/* <ModalOrder setModal={setModal} userId={userId}/> */}
                        <div className='flex flex-col border-4 w-96 p-8 gap-4'>
                            <div className='flex w-full justify-between items-center'>
                                <p className='text-amber-400 text-2xl'> نمایش سفارشات </p>
                                <p className='hover:cursor-pointer text-xl' onClick={()=>setModal(false)}><AiFillCloseSquare/></p>
                            </div>
                            <div className='flex flex-row items-center justify-between w-full gap-x-4'>
                                <label htmlFor=""> نام مشتری</label>
                                <p className='underline '>{userId.name}</p>
                            </div>
                            <div className='flex flex-row items-center justify-between w-full gap-x-4'>
                                <label htmlFor=""> آدرس </label>
                                <p className='underline '>{userId.address}</p>
                            </div>
                            <div className='flex flex-row items-center justify-between w-full gap-x-4'>
                                <label htmlFor=""> تلفن </label>
                                <p className='underline '>{userId.phone}</p>
                            </div>
                        </div>
                     </div>
            </Modal>
        </div>
      

     );
}
 
export default SelectPriceAndStock;