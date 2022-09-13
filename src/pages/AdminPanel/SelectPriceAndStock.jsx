import React,{useState, useEffect} from 'react';
import * as data from "../../data";
import LayOutAdmin from '../../layout/LayOutAdmin';
import axios from 'axios';
import { useParams, Link } from 'react-router-dom';



const SelectPriceAndStock = () => {


    const [product,setProduct]=useState([]);
    const [totalPage,setTotalPage]=useState(0);
    const [inputShow,setInPutShow]=useState(false);
    const [editedData,setEditedData]=useState([]);

    const {id}=useParams();

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

      const changeHandler=(e,id,filed)=>{
        const {value}=e.target;
        if(editedData.some((p)=>p.id===id)){
            setEditedData((prv)=>{
                return prv.map((itemP)=>itemP.id===id ? {...itemP,[filed]:value}:itemP)
            })
        }else{
            setEditedData([...editedData,{id,[filed]:value}])
        }
        console.log(editedData);
      }


    return ( 
        <div className='flex flex-row gap-4'>
            <LayOutAdmin/>
            <div className='w-3/4 flex  flex-col mt-4'> 

                <div className='w-full bg-amber-400 p-4 mb-4 flex items-center justify-between'>
                    <div>
                    <p className='text-2xl ml-4'> مدیریت موجودی و قیمت ها </p>
                    </div>
                    <div className='flex space-x-4'>
                    <button className='p-4 bg-gray-200 hover:shadow-2xl	hover:cursor-pointer'>ذخیره</button>
                    </div>
                </div>

            <table className="table-auto w-full">
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
                    <tr className='border-b-2 border-amber-400 mt-4 h-14'>
                        <td className='pr-9'>{item.name}</td>
                        <td className='w-1/6' onClick={()=>setInPutShow(true)}>
                          {inputShow ? <> <input type="text" onChange={(e)=>changeHandler(e,item.id,"price")} defaultValue={item.price} className="w-2/3"/> </> : <> {item.price} </>}    
                        </td>
                        <td className='w-1/6' onClick={()=>setInPutShow(true)}>
                            {inputShow ? <> <input type="text" onChange={(e)=>changeHandler(e,item.id,"stock")}  defaultValue={item.stock} className="w-2/3" /> </> : <> {item.stock} </>}              
                        </td>
                    </tr>     
                        )

                    })}
                </tbody>
            </table>   

              <div className='flex flex-row justify-center'>
                {[...Array(totalPage)].map((x, i) =>
                    <Link to={`/selectPriceAndStock/${i+1}`} className="p-4">
                        <div className='hover:bg-amber-400 p-4'>
                         {i+1} 
                        </div>    

                    </Link>
                )}
                </div>     
            </div>
        </div>

     );
}
 
export default SelectPriceAndStock;