import React from 'react';
import axios from 'axios';
const ModalDelete = ({setModalDelete, setProduct,product, enterId}) => {

    const deleteHandler=(enterId)=>{
        // console.log(enterId)
        setModalDelete(false)
        axios.delete(`http://localhost:3001/products/${enterId}`).then(res=>{
        const post=product.filter((item)=>item.id!==enterId)
            setProduct(post)
        }
        )
      }


    return ( 
        <div className='flex flex-col border-4 w-80 p-8 gap-4'>
                <p className='text-amber-400 text-2xl'> آیا از حذف کالا مطمئن هستید </p>

            <div className='flex flex-row gap-x-8 items-center w-full'>
                <button className='bg-amber-400 w-1/2 p-1 hover:bg-red-600' onClick={()=> deleteHandler()}> بله</button>
                <button className='bg-amber-400 w-1/2 p-1' onClick={()=>setModalDelete(false)} >خیر</button>
            </div>
         
        </div>
     );
}
 
export default ModalDelete;