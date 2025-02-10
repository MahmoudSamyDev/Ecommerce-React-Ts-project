import Layout from '../layout/Layout';
import Home from '../Pages/Home/Home';
import ProductPage from '../Pages/ProductPage/ProductPage';
import StorePage from '../Pages/StorePage/StorePage';
import StoreCart from '../Pages/StoreCart/StoreCart';
import CustomerDealDetails from '../Pages/CustomerDealDetails/CustomerDealDetails';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { createContext, useState } from 'react';
import { CartProduct_TP } from '../Types';
import { tempProducts } from '../utilities/data';

interface CartContextType {
  productsInCart: CartProduct_TP[];
  setProductsInCart: React.Dispatch<React.SetStateAction<CartProduct_TP[]>>;
}
interface CartSideBarOpenContextType {
  openSideCart: boolean;
  setOpenSideCart: React.Dispatch<React.SetStateAction<boolean>>;
  totalCartPrice: number;
  setTotalCartPrice: React.Dispatch<React.SetStateAction<number>>;
}

export const CartContext = createContext<CartContextType | undefined>(undefined);
export const CartSideBarOpen = createContext<CartSideBarOpenContextType | undefined>(undefined);

function App() {
  const [productsInCart, setProductsInCart] = useState<CartProduct_TP[]>(tempProducts);
  const [openSideCart, setOpenSideCart] = useState(false);
  const totalprice = productsInCart?.reduce((acc, product) => acc + product.price, 0);
  const [totalCartPrice, setTotalCartPrice] = useState(totalprice);

  return (
    <CartSideBarOpen.Provider value={{ openSideCart, setOpenSideCart, totalCartPrice, setTotalCartPrice }}>
      <CartContext.Provider value={{ productsInCart, setProductsInCart }}>
        <div className="App">
          <BrowserRouter>
          <Routes>
            <Route path='/' element={<Layout />}>
                <Route index element={<Home />} />
                <Route index path='home' element={<Home />} />
                <Route path='product' element={<ProductPage />} />
                <Route path='store' element={<StorePage />} />
                <Route path='cart' element={<StoreCart />} />
                <Route path='details' element={<CustomerDealDetails />} />
            </Route>
          </Routes>
            
          </BrowserRouter>
        </div>
      </CartContext.Provider>
    </CartSideBarOpen.Provider>
  )
}

export default App
