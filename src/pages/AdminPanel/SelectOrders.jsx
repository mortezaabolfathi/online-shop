import axios from 'axios';
import React, { useEffect, useState } from 'react';
import LayOutAdmin from '../../layout/LayOutAdmin';
import Modal from "react-modal";
import ModalOrder from "./modal/ModalOrder";
import { AiFillGift, AiFillCloseSquare } from "react-icons/ai";
const SelectPriceAndStock = () => {

    const [order,setOrder]=useState([])
    const [modal,setModal]=useState(false)
    const [userId,setUserId]=useState([])
    const [selectWithStatus,setSelectWithStatus]=useState("")

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
        setUserId(order[enterId-1])
    }

    const selectStatus=(e)=>{
        const itemSelectStatus=order.filter((item)=>item.status===e)
        setSelectWithStatus(itemSelectStatus)
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
                        <input type="radio" name="ok" onChange={()=>selectStatus("pending")}/>
                    
                        <label htmlFor="" >سفارشات تحویل شده  </label>
                        <input type="radio" name="ok"   onChange={()=>selectStatus("shipped")}/>

                        <label htmlFor="" > همه سفارشات</label>
                        <input type="radio" name="ok"   onChange={()=>selectStatus("")}/>
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
                    {selectWithStatus.length===0 ? 
                        <tbody>
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
                        :
                        <tbody>
                        {selectWithStatus.map((item)=>{
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
                     }
                    
                </table>        
             </div>
             <Modal isOpen={modal} className="flex justify-center items-center w-full h-full bg-amber-400/5">
                    <div className='w-ful bg-white justify-center items-center'>
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
                            <div className='border-2'>
                                <table className='w-full flex flex-col'>
                                    <thead>
                                        <tr className='w-full flex justify-around border-b-2 border-amber-400 text-lg py-2'>
                                            <td>کالا</td>
                                            <td>قیمت</td>
                                            <td>تعداد</td>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {/* {console.log(userId.products)} */}
                                        {modal && ( userId.products.map((item)=>{
                                            console.log(item)
                                            return(
                                                <tr  className='w-full flex justify-around text-sm pt-1' >
                                                    <td>{item.productId}</td>
                                                    <td>456</td>
                                                    <td>{item.quantity}</td>
                                                 </tr>  
                                            )
                                        })) }

                                        
                                    </tbody>
                                </table>
                            </div>
                            <div className='flex items-center justify-center p-2 mt-4'  onClick={()=>setModal(false)}>
                                <button className={userId.status==="shipped" ? 'bg-green-500 w-1/2 p-1 hover:shadow-md shadow-slate-400' : 'bg-red-600 w-1/2 p-1'}  >{userId.status==="shipped" ? "ارسال شده" : "درحال ارسال"}</button>
                            </div>
                        </div>
                     </div>
            </Modal>
        </div>
      

     );
}
 
export default SelectPriceAndStock;