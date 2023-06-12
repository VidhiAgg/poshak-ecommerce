import { Route, Routes } from "react-router-dom";
import "./App.css";
import MockmanPage from "./frontend/pages/MockmanPage";
import HomePage from "./frontend/pages/HomePage/HomePage";
import "react-toastify/dist/ReactToastify.css";
import { Navigation } from "./frontend/components/NavigationBar/Navigation";
import Profile from "./frontend/pages/Profile/Profile";
import SignupPage from "./frontend/pages/SignUp/SignupPage";
import AddressPage from "./frontend/pages/AddressManagement/AddressPage";
import CategoriesPage from "./frontend/components/categories/CategoriesPage";
import CartPage from "./frontend/pages/cartPage/CartPage";
import Footer from "./frontend/components/Footer";
import { ProductPage } from "./frontend/pages/ProductListingPage/ProductPage";
import LoginPage from "./frontend/pages/loginPage/LoginPage";
import { Slide, ToastContainer } from "react-toastify";
import { PrivateRouter } from "./frontend/components/PrivateRouter";
import WishListPage from "./frontend/pages/Wishlist/WishListPage";
import ProductDetailPage from "./frontend/pages/ProductListingPage/IndividualProductPage";
import CheckoutPage from "./frontend/pages/checkoutPage/CheckoutPage";
import AddNewAddress from "./frontend/pages/AddressManagement/AddNewAddress";

function App() {
  return (
    <div className="App">
      <Navigation />
      <Routes>
        <Route path="/mockman" element={<MockmanPage />}></Route>
        <Route index path="/" element={<HomePage />}></Route>
        <Route index path="/*" element={<HomePage />}></Route>
        <Route path="/products" element={<ProductPage />}>
        </Route>
      
        <Route path="/products/:productId" element={<ProductDetailPage />}/>
         <Route path="/cart/" element={
         <PrivateRouter><CartPage />
        </PrivateRouter>
        } 
        />
        <Route path="/profile" element={
          <PrivateRouter>
          <Profile /> 
          </PrivateRouter>
        }></Route>
 <Route path="/wishlist" element={
          <PrivateRouter>
          <WishListPage /> 
          </PrivateRouter>
        }></Route>

        <Route path="/mockman" element={<MockmanPage />}></Route>
        <Route path="/categories/" element={<CategoriesPage />} />
        <Route path="/signUp/" element={<SignupPage />} />
        <Route path="/address/" element={
        <PrivateRouter>
        <AddressPage />
        </PrivateRouter>
        } />

<Route path="/addNewAddress/" element={
        <PrivateRouter>
        <AddNewAddress />
        </PrivateRouter>
        } />
        <Route path="/checkout/" element={
        <PrivateRouter>
        <CheckoutPage />
        </PrivateRouter>
        } />
        <Route path="/login" element={<LoginPage />} />
      </Routes>
      <ToastContainer
        position="top-right"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        transition={Slide}
      />

    </div>
  );
}

export default App;
