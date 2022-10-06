import {  BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './routes/home/home.component';
import Navigation from './routes/navigation/navigation.component';
import Authentication from './routes/authentication/authentication.component';
import { UserProvider } from './contexts/user.context';
import { ProductsProvider } from './contexts/products.context';
import { CartProvider } from './contexts/cart.context';
import Shop from './routes/shop/shop.component';


const App = () => {

  return (
    <div>
    <BrowserRouter>
      <UserProvider>
        <ProductsProvider>  
          <CartProvider>

            <Routes>
              <Route path='/' element={<Navigation />}>

              {/* index property tells react to render component Home on the home page "/" */}
              <Route index element={<Home />} />

              <Route path='/shop' element={<Shop />} />

              <Route path='/auth' element={<Authentication />} />

              </Route>
            </Routes>

          </CartProvider>
        </ProductsProvider>
      </UserProvider>
    </BrowserRouter>
    </div>
  );
};

export default App;
