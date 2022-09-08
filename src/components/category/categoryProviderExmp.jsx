import React, { useContext, useState } from "react";
import { productsData } from "./../../db/db";
const ProductsCMP = React.createContext();
const SetProductCMP = React.createContext();

const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState(productsData);
  return (
    <div>
      <ProductsCMP.Provider value={products}>
        <SetProductCMP.Provider value={setProducts}>
          {children}
        </SetProductCMP.Provider>
      </ProductsCMP.Provider>
    </div>
  );
};

export default ProductProvider;

export const useProducts = () => useContext(ProductsCMP);

export const UserProductACtion = () => {
  const setProducts = useContext(SetProductCMP);
  const products = useContext(ProductsCMP);
  const removeHandler = (enterId) => {
    const selectIremForRemove = products.filter((item) => item.id !== enterId);
    setProducts(selectIremForRemove);
  };
  const incrementHandler = (enterId) => {
    const productsCLone = [...products];
    const selectIremForDecriment = productsCLone.filter(
      (item) => item.id === enterId
    );
    selectIremForDecriment[0].quantity++;
    setProducts(productsCLone);
  };
  const decrementHandler = (enterId) => {
    const productsCLone = [...products];
    const selectIremForDecriment = productsCLone.filter(
      (item) => item.id === enterId
    );
    selectIremForDecriment[0].quantity--;
    setProducts(productsCLone);
  };

  const changeHandler = (enterId, e) => {
    const productsCLone = [...products];
    const selectIremForCahnge = productsCLone.filter(
      (item) => item.id === enterId
    );
    console.log(selectIremForCahnge[0].title);
    selectIremForCahnge[0].title = e.target.value;
    setProducts(productsCLone);
  };
  const changeHandlerSelect = (e) => {
    const size = e.target.value;
    console.log("size is :" ,size)
    if (size === "ALL") {
     setProducts(productsData)
    } else {
      const slectetWithSort = products.filter(
        (item) => item.availablesSizes.indexOf(size) >= 0
        );
        console.log("slectetWithSort", slectetWithSort);
      setProducts(slectetWithSort);
    }
  };

  const changeHandelerBySort=(e)=>{
    const productsCLone=[...products];
    console.log(e.target.value)
    if(e.target.value==="lowest"){
      const sortPrice=productsCLone.sort((a,b)=>{
        if(a.Price>b.Price){
          return 1;
        }
        if(a.Price<b.Price){
          return -1;
        }
        return 0
      })
      setProducts(sortPrice)
    }
    if(e.target.value==="highest"){
      const sortPrice=productsCLone.sort((a,b)=>{
        if(a.Price<b.Price){
          return 1;
        }
        if(a.Price>b.Price){
          return -1;
        }
        return 0
      })
      setProducts(sortPrice)

    }
  }

  const sortBySearch=(e)=>{
    console.log(e.target.value)
    const productsCLone=[...products]
   const selectOfSearch=productsCLone.filter((item)=>{ 
    // console.log(item)
    return item.title.includes(e.target.value)
   });
    // setProducts(productsCLone);
  }
  return {
    removeHandler,
    incrementHandler,
    decrementHandler,
    changeHandler,
    changeHandlerSelect,
    changeHandelerBySort,
    sortBySearch
  };
};
