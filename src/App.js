import "./App.css";
import HomePage from "./components/Dashboard/HomePage/HomePage";
import NavBar from "./components/NavBar/NavBar";
import SideBar from "./components/SideBar/SideBar";
import Categories from "./components/Dashboard/Categories/Categories";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import CreateCategory from "./components/Dashboard/Categories/CreateCategory/CreateCategory";
import Products from "./components/Dashboard/Products/Products";
import CreateProducts from "./components/Dashboard/Products/CreateGoods/CreateGoods";
import CreateServices from "./components/Dashboard/Products/CreateServices/CreateServices/CreateServices";
import Orders from "./components/Dashboard/Orders/Orders";
import CreateOrders from "./components/Dashboard/Orders/CreateOrders/CreateOrders";
import Users from "./components/Dashboard/Users/Users";
import CreateRole from "./components/Dashboard/Users/CreateRole/CreateRole";
import Ads from "./components/Dashboard/Ads/Ads";
import CreateAds from "./components/Dashboard/Ads/CreateAds/CreateAds";

function App() {
  return (
    <div>
      <NavBar />
    <BrowserRouter>
    <div className="flex">
      <SideBar />
          <div className=" w-full pl-[210px] ">
      <Routes>
        <Route >
          <Route path="/home" element={<HomePage />} />

          <Route path="/categories" >
          <Route index element={<Categories />} />
            <Route path="createcategory" element={<CreateCategory />} />
          </Route>

          <Route path="/products" >
          <Route index element={<Products />} />
            <Route path="createproducts" element={<CreateProducts />} />
            <Route path="createservices" element={<CreateServices />} />  
          </Route>
          

          <Route path="/orders" >
          <Route index element={<Orders />} />
            <Route path="createorders" element={<CreateOrders />} />
          </Route>
          
          <Route path="/users" >
          <Route index element={<Users />} />
            <Route path="createroles" element={<CreateRole />} />
          </Route>

          <Route path="/Ads" >
          <Route index element={<Ads/>} />
            <Route path="Createads" element={<CreateAds />} />
          </Route>

        </Route>
      </Routes>
        </div>
    </div>
  </BrowserRouter>
  </div>
  

   
  );
}

export default App;
