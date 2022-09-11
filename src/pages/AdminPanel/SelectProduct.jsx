import React, { useState, useEffect } from 'react';
import { AiFillGift, AiFillCloseSquare } from "react-icons/ai";
// import * as data from "../../data";
import axios from 'axios';
import { Link, useParams } from 'react-router-dom';
import LayOutAdmin from '../../layout/LayOutAdmin';
import Modal from "react-modal";
import ModalSave from './modal/ModalSave';
import ModalDelete from './modal/ModalDelete';

const SelectProduct = () => {

    const [product,setProduct]=useState([]);
    const [totalPage,setTotalPage]=useState(0);
    const [modalSave,setModalSAve]=useState(false);
    const [modalDelete,setModalDelete]=useState(false)
    const [idDelete,setIdDelete]=useState()


    const {id}=useParams()

   const handleSave=(e)=>{
    e.preventDefault()
    let data=new FormData(e.target)
    console.log(data.get("category"))
    const config = {
        headers: { 'content-type': 'multipart/form-data' }
        }
        axios.post("http://localhost:3001/products",data,config)
    }



   

    const getData=()=>{
        axios.get(`http://localhost:3001/products?_page=${id}&_limit=4`).then((res)=>{
            setProduct(res.data)
            const totalProducts = Number(res.headers["x-total-count"]);
            const totalP = Math.ceil(totalProducts /4);
            setTotalPage(totalP);
        })
      }
    
      useEffect(()=>{
        getData()
      },[id])


      const setItemDeleteId=(enterId)=>{
        setModalDelete(true)
        setIdDelete(enterId) 
      }   

      const deleteHandler=(itemId)=>{
        axios.delete(`http://localhost:3001/products/${itemId}`).then(res=>{
                const post=product.filter((item)=>item.id!==itemId)
                setProduct(post)
            }
            )
            setModalDelete(false)     
      }

    return ( 
<>
        <div className='flex flex-row gap-4'> 
        <LayOutAdmin/>
            <div className='w-3/4 flex item-center justify-center flex-col mt-4'>
                <div className='flex flex-row justify-between bg-amber-400  p-4 items-center'>
                    <p className='text-2xl ml-4'>مدیریت کالاها</p>
                     <button onClick={()=>setModalSAve(true)} className='p-4 bg-gray-200 hover:shadow-2xl	hover:cursor-pointer'>افزودن کالا</button>
                </div> 
                <table className="w-full mt-4">
                    <thead className=''>
                        <tr className='w-full border-b-4 border-gray-400 mb-4'>
                            <th>تصویر</th>
                            <th>نام کالا</th>
                            <th>دسته بندی</th>
                            <th>حذف</th>
                        </tr>
                    </thead>
                    <tbody>
                        {product.map((item)=>{
                            return(
                        <tr className='border-b-2 border-amber-400'>
                            <td className='w-1/6' > <img src={`http://localhost:3001${item.image}`} alt="" /></td>
                            <td className='pr-9'>{item.name}</td>
                            <td className='pr-9'>{item.category}</td>
                            <td className='pr-9 hover:cursor-pointer hover:text-amber-400'><p onClick={()=>setItemDeleteId(item.id)}> <AiFillCloseSquare className='text-4xl'/> </p></td>
                        </tr>     
                            )

                        })}
                    </tbody>
                </table>
                
                <div className='flex flex-row justify-center'>
                {[...Array(totalPage)].map((x, i) =>
                    <Link to={`/selectProducts/${i+1}`} className="p-4">
                        <div className='hover:bg-amber-400 p-4'>
                         {i+1} 
                        </div>    

                    </Link>
                )}
                </div>

            </div>
            <Modal isOpen={modalSave} className="flex justify-center items-center w-full h-full bg-amber-400/5">
                <div className='w-ful bg-white justify-center items-center'>
                <ModalSave setModalSAve={setModalSAve} handleSave={handleSave}/>
                </div>
            </Modal>
            <Modal isOpen={modalDelete} className="flex justify-center items-center w-full h-full bg-amber-400/5">
                <div className='w-ful bg-white justify-center items-center'>

                    <div className='flex flex-col border-4 w-80 p-8 gap-4'>
                    <p className='text-amber-400 text-2xl'> آیا از حذف کالا مطمئن هستید </p>

                    <div className='flex flex-row gap-x-8 items-center w-full'>
                        <button className='bg-amber-400 w-1/2 p-1 hover:bg-red-600' onClick={()=> deleteHandler(idDelete)}> بله</button>
                        <button className='bg-amber-400 w-1/2 p-1 hover:bg-green-500' onClick={()=>setModalDelete(false)} >خیر</button>
                    </div>
         
                    </div>
                </div>
            </Modal>
             
        </div>

</>

     );
}
 
export default SelectProduct;