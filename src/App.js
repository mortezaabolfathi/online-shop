import { BrowserRouter, Routes, Route } from "react-router-dom";
import CartProvider from "./Providers/cartProvider/cartProvider";
import LayOut from "./layout/Layout";
import ProductPage from "./pages/ProductPage";
import Cart from "./pages/Cart";
import SingUpPage from "./pages/SingUpPage/SingUpPage";
import CheckOutPage from "./pages/CheckOutPage/CheckOutPage";
import LoginPage from "./pages/LoginPage/LoginPage";
import AuthProvider from "./Providers/AuthProvider";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Home from "./pages/Home/HomePage";
import CategoryProvider from "./components/category/categoryProvider";
import OffLineShop from "./pages/OffLineShop/OffLineShop";
import FinalBuyPage from "./pages/FinalBuyPage/FinalBuyPage";
import SelectProduct from "./pages/AdminPanel/SelectProduct";
import SelectOrders from "./pages/AdminPanel/SelectOrders"
import SelectPriceAndStock from "./pages/AdminPanel/SelectPriceAndStock";
import LayOutAdmin from "./layout/LayOutAdmin";
import Category from "./pages/Category/Category";

function App() {
  return (
    <BrowserRouter>
    <AuthProvider>
    <ToastContainer/>
      <CategoryProvider>
        <CartProvider>
          
          <Routes>
            <Route path="/" index element={<LayOut> <Home /> </LayOut> } />
            <Route path="/productPage" element={<LayOut> < ProductPage/> </LayOut> } />
            <Route path="/cart" element={<LayOut> <Cart /> </LayOut>  } />
            <Route path="/checkOutPage" element={<LayOut> <CheckOutPage /> </LayOut>  } />
            <Route path="/singUpPage" element={<LayOut> <SingUpPage/> </LayOut>  } />
            <Route path="/loginPage" element={<LayOut> <LoginPage/> </LayOut>  } />
            <Route path="/product/:id" element={<LayOut> <OffLineShop/> </LayOut>  } />
            <Route path="/finalBuyPage" element={<LayOut> <FinalBuyPage/> </LayOut>  } />
            <Route path="/category/:category" element={<LayOut> <Category/> </LayOut>  } />
            <Route path="/selectProducts" element={<SelectProduct/>} />
            <Route path="/selectProducts/:id" element={<SelectProduct/>} />
            <Route path="/selectOrders" element={<SelectOrders/>} />
            <Route path="/selectPriceAndStock" element={<SelectPriceAndStock/>} />
            <Route path="/selectPriceAndStock/:id" element={<SelectPriceAndStock/>} />
            <Route path="/layOutAdmin" element={<LayOutAdmin/>} />
            
          </Routes>
          
        </CartProvider>
      </CategoryProvider>
    </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
