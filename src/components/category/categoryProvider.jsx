import React, { Component,useState, useContext } from 'react';
import * as data from "./../../data"

    const productsData=[...data.products]

    const ProductsCMP = React.createContext();
    const SetProductCMP = React.createContext();
    
    
    const CategoryProvider = ({ children }) => {
      const [productsItem, setProducts] = useState(productsData);
      // console.log("productsItem is :", productsItem)
      
      // const [productIsSelect, setProductIsSelect]=useState()
      
  return (
    <div>
      <ProductsCMP.Provider value={productsItem}>
        <SetProductCMP.Provider value={setProducts}>
          {children}
        </SetProductCMP.Provider>
      </ProductsCMP.Provider>
    </div>
  );
};

export default CategoryProvider;


export const useProducts = () => useContext(ProductsCMP);
// console.log("funck useProducts", useProducts)
export const UserProductACtion = () => {
    const setProducts = useContext(SetProductCMP);
    const products = useContext(ProductsCMP);
    const [copyPtoduct,setCopyProduct]=useState(products)
    
    const selectedItem=(enterName)=>{
      setProducts(products)
      // console.log("enterName is :", enterName)
      // console.log("product is :" ,products)
        const categoryLamp=products.filter((item)=>item.name===enterName);
        setCopyProduct(categoryLamp)
        // console.log("categorySelect is:", categoryLamp)
    }
    return {selectedItem}
}
