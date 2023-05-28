import { Route, Routes } from "react-router-dom";
import "./App.css";
import MockmanPage from "./frontend/pages/MockmanPage";
import HomePage from "./frontend/pages/HomePage/HomePage";
import ProductPage from "./frontend/pages/ProductPage";
import {Navigation} from "./frontend/components/NavigationBar/Navigation";
import IndivvidualProductPag from "./frontend/pages/IndividualProductPage";
import Profile from "./frontend/pages/Profile";
import SignupPage from "./frontend/pages/SignupPage";
import AddressPage from "./frontend/pages/AddressManagement/AddressPage";
import CategoriesPage from "./frontend/components/categories/CategoriesPage";
import CartPage from "./frontend/pages/cartPage/CartPage"
import Footer from "./frontend/components/Footer";


function App() {
  return (
    <div className="App">
      <Navigation />
     <Routes>
      <Route path="/mockman" element ={<MockmanPage />}></Route>
      <Route index path="/" element={<HomePage />}></Route>
      <Route path="/products" element ={<ProductPage />}>
      <Route path=":productId" element ={<IndivvidualProductPag/>}></Route>
      </Route>
      <Route path="/cart/" element ={<CartPage />}></Route>
      <Route path="/profile" element ={<Profile />}></Route>
      <Route path="/mockman" element ={<MockmanPage />}></Route>
      <Route path="/categories/" element={<CategoriesPage />} />
      <Route path="/signUp/" element={<SignupPage />} />
      <Route path="/address/" element={<AddressPage />} />
     </Routes>
     <Footer/>
    </div>
  );
}

export default App;
