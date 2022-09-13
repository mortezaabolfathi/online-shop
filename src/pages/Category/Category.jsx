import axios from 'axios';
import React from 'react';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';


const Category = () => {
    const {category}=useParams()
    console.log("category is :",category)

    const [selectCategory,setSelectCategory]=useState([])

    const getData=()=>{
        axios.get("http://localhost:3001/products").then((res)=>{
            setSelectCategory(res.data)
        })
    }

    useEffect(()=>{
        getData()
    },[])

    return ( 
        <di>
            this is category chair
            {/* {console.log(selectCategory)} */}
        </di>
     );
}
 
export default Category;