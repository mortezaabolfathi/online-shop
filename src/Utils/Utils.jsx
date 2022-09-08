export const checkInCart=(cart, product)=>{
    const execs=cart.find((c)=>c.id===product.id);
    return execs
  }