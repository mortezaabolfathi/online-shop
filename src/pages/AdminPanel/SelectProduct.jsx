import React, { useState, useEffect } from 'react';
import { AiFillGift, AiFillCloseSquare } from "react-icons/ai";
import * as data from "../../data";
import axios from 'axios';
import { Link, useParams } from 'react-router-dom';



const SelectProduct = () => {

    const [product,setProduct]=useState([]);
    const [totalPage,setTotalPage]=useState(0);

    const {id}=useParams()

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


    return ( 
<>
        <div className='w-full  flex item-center justify-center'> 

  
        <div>
            <table class="w-full ">
                <thead className=''>
                    <tr className='w-full border-b-4 border-gray-400 mb-4'>
                        <th>تصویر</th>
                        <th>نام کالا</th>
                        <th>دسته بندی</th>
                        <th>ویرایش</th>
                    </tr>
                </thead>
                <tbody>
                    {product.map((item)=>{
                        return(
                    <tr className='border-b-2 border-amber-400'>
                        <td className='w-1/6'> <img src={item.image} alt="" /></td>
                        <td className='pr-9'>{item.name}</td>
                        <td className='pr-9'>{item.category}</td>
                        <td className='pr-9'><p> <AiFillCloseSquare className='text-4xl'/> </p></td>
                    </tr>     
                        )

                    })}
                </tbody>
            </table>

            {[...Array(totalPage)].map((x, i) =>
                <Link to={`/selectProducts/${i+1}`} className="p-4">
                    {i+1}
                </Link>
            )}

        </div>
         
        
         <div className='bg-red-400'>
            <button className='bg-gray-400' onClick={()=>setModal(true)}>افزودن کالا</button>
         </div>     
        </div>

        {/* modal */}

</>

     );
}
 
export default SelectProduct;