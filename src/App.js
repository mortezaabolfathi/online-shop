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
import AdminPage from "./pages/AdminPanel/AdminPage";
import OffLineShop from "./pages/OffLineShop/OffLineShop";
import FinalBuyPage from "./pages/FinalBuyPage/FinalBuyPage";
import SelectProduct from "./pages/AdminPanel/SelectProduct";

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
            <Route path="/adminPage" element={<LayOut> <AdminPage/> </LayOut>  } />
            <Route path="/offLinShop" element={<LayOut> <OffLineShop/> </LayOut>  } />
            <Route path="/finalBuyPage" element={<LayOut> <FinalBuyPage/> </LayOut>  } />
            <Route path="/selectProducts" element={<LayOut> <SelectProduct/> </LayOut>  } />
            <Route path="/selectProducts/:id" element={<LayOut> <SelectProduct/> </LayOut>  } />
          </Routes>
          
        </CartProvider>
      </CategoryProvider>
    </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
