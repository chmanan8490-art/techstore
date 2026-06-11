import {
Routes,
Route
} from "react-router-dom";


import Navbar from "./components/Navbar";
import Footer from "./components/Footer";


import Home from "./pages/Home";
import Shop from "./pages/Shop";
import Deals from "./pages/Deals";
import NewArrivals from "./pages/NewArrivals";
import Brands from "./pages/Brands";
import ContactUs from "./pages/ContactUs";
import Account from "./pages/Account";
import Wishlist from "./pages/Wishlist";
import TrackOrder from "./pages/TrackOrder";
import HelpCenter from "./pages/HelpCenter";
import ProductDetail from "./pages/ProductDetail";
import Cart from "./pages/Cart";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Checkout from "./pages/Checkout";
import Profile from "./pages/Profile";



function App(){


return (

<>

<Navbar/>


<Routes>

<Route path="/" element={<Home/>}/>

<Route path="/shop" element={<Shop/>}/>

<Route path="/deals" element={<Deals/>}/>

<Route path="/new" element={<NewArrivals/>}/>

<Route path="/brands" element={<Brands/>}/>

<Route path="/contact" element={<ContactUs/>}/>

<Route path="/account" element={<Account/>}/>

<Route path="/wishlist" element={<Wishlist/>}/>

<Route path="/track-order" element={<TrackOrder/>}/>

<Route path="/help" element={<HelpCenter/>}/>

<Route 
path="/product/:id" 
element={<ProductDetail/>}
/>

<Route path="/cart" element={<Cart/>}/>

<Route path="/login" element={<Login/>}/>

<Route path="/register" element={<Register/>}/>

<Route path="/checkout" element={<Checkout/>}/>

<Route path="/profile" element={<Profile/>}/>

</Routes>


<Footer/>


</>


)


}


export default App;