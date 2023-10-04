import "./App.css";
import PrivateRoute from "./Routes/PrivateRoute";

//Public Pages
import Header from "./Components/Navbar/Header";
import Home_page from "./Components/HomePage/Home_page";
import Resources_Page from "./Components/ResourcesPage/Resources_Page";
import Portfolio from "./Components/Portfolio/Portfolio";
import Feedback from "./Pages/FeedBack/Add_feedback";
import AboutUs from "./Pages/AboutUs/About_US";
import Login from "./Components/Login/Login";
import RegisterDashboard from "./Components/Register/RegisterDashboard";
import Add_feedback from "./Pages/FeedBack/Add_feedback";
import ViewFeedback from "./Pages/FeedBack/View_feedback";

//Admin
import AdminDashboard from "./Pages/Admin/AdminDashboard";
import Amanager from "./Pages/Admin/Amanager";
import ViewAllCus from "./Pages/Admin/ViewAllCus"
import ViewAllSupplier from "./Pages/Admin/viewAllSupplier";



//Supplier Management
import AddSupplier from "./Pages/supplier/AddSupplier";
import SupplierLogin from "./Pages/supplier/SupplierLogin";
import Supplier_Dashbord from "./Pages/supplier/Supplier_Dashbord";
import ViewSupplier from "./Pages/supplier/ViewSupplier";
import UpdateSupplierProfile from "./Pages/supplier/UpdateSupplierProfile";


// Customer Management
import AddCustomer from "./Pages/customer/AddCustomer";
import CustomerLogin from "./Pages/customer/CustomerLogin";
import Customer_DashBoard from "./Pages/customer/Customer_DashBoard";
import CustomerProfile from "./Pages/customer/CustomerProfile";
import CustomerImage from "./Pages/customer/CustomerImage";



//Finance Management
import AddSalary from "./Pages/finance/AddSalary";
import ViewPaysheet from "./Pages/finance/ViewAllPaysheets";
import UpdatePaysheet from "./Pages/finance/UpdatePaysheets";
import Finance_Dashboard from "./Pages/finance/Finance_Dashboard";
import SalaryReport from "./Pages/finance/SalaryReport";

//Booking Management

import AddBooking from "./Pages/Bookings/AddBooking";
import ViewBookings from "./Pages/Bookings/ViewBookings";
import DisplayBookings from "./Pages/Bookings/DisplayBookings";
import GenReceipts from "./Pages/Bookings/GenReceipt";

// Resource Management
import Addresources from "./Pages/HotelResource/Addresources";
import Viewresources from "./Pages/HotelResource/ViewResource";
import Updateresourse from "./Pages/HotelResource/UpdateResource";
import DisplayResource from "./Pages/HotelResource/DisplayResource";
import ResourceDashboard from "./Pages/HotelResource/ResourceDashboard";

//Package Management
import AddPackage from "./Pages/SessionalPackage/Addpackage";
import Viewpackage from "./Pages/SessionalPackage/ViewPackage";
import Updatepackage from "./Pages/SessionalPackage/UpdatePackage";

// User Management
import AddManager from "./Pages/manager/AddManager";
import ViewManager from "./Pages/manager/ViewManager";
import UpdateManager from "./Pages/manager/UpdateManager";
import Manager_Dashboard from "./Pages/manager/Manager_Dashboard";
import ManagerLogin from "./Pages/manager/ManagerLogin";

// Tour Management
import AddTour from "./Pages/tour/AddTour";
import TourFunction from "./Pages/tour/Tourfunction";
import ViewTours from "./Pages/tour/ViewTours";
import UpdateTours from "./Pages/tour/UpdateTours";

//Catering Management
import AddFood from "./Pages/Catering/AddFood";
import ViewItems from "./Pages/Catering/ViewItems";
import UpdateFood from "./Pages/Catering/UpdateFood";
import FoodReport from "./Pages/Catering/FoodReport";

// Employee Management
import AddEmployee from "./Pages/HR_Manager/AddEmployee";
import EmployeeDashboard from "./Pages/HR_Manager/employeeDashboard";
import UpdateEmployee from "./Pages/HR_Manager/updateEmployee";
import ViewProfile from "./Pages/HR_Manager/ViewProfile";

// Inventory Management
import CreateItem from "./Pages/inventory/CreateItem";
import EditItem from "./Pages/inventory/EditItem";
import ItemDetails from "./Pages/inventory/ItemDetails";
import ItemHome from "./Pages/inventory/ItemHome";
import Report from "./Pages/inventory/Report";

// Supplier Materials
import AddMaterial from "./Pages/Materials/AddMaterial";
import ViewMaterial from "./Pages/Materials/ViewMaterial";
import MyMaterials from "./Pages/Materials/MyMaterials";
import Supplier_Profile from "./Pages/supplier/Supplier_Profile";
import SupplierReport from "./Pages/supplier/SupplierReport";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";


function App() {
  return (
    <div>
      <Router>
        {/* Navigation Bar*/}
        <Header />

        <Routes>
          {/* Public Routes*/}
          <Route path="/" element={<Home_page />} />
          <Route path="/resource" element={<Resources_Page />} />
          <Route path="/protfolio" element={<Portfolio />} />
          <Route path="/feedback" element={<Feedback />} />
          <Route path="/aboutus" element={<AboutUs />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<RegisterDashboard />} />
          <Route path="/addfeedback" element={<Add_feedback />} />
          <Route path="/viewfeedback" element={<ViewFeedback />} />

          {/*Admin */}
          <Route path="/adashboard" element={<AdminDashboard />} />
          <Route path="/amanager" element={<Amanager />} />
          <Route path="/viewallcus" element={<ViewAllCus />} />
          <Route path="/viewallsup" element={<ViewAllSupplier />} />


          {/*Supplier Management Routes*/}
          <Route path="/suppliersignup" element={<AddSupplier />} />
          <Route path="/sLogin" element={<SupplierLogin />} />

          <Route
            exact
            path="/supplier"
            element={<PrivateRoute permissionLevel="SUPPLIER" />}
          >
            <Route path="/sdashboard" element={<Supplier_Dashbord />} />
            <Route path="/sview" element={<ViewSupplier />} />
            <Route path="/sprofile" element={<Supplier_Profile />} />
            <Route path= "/uprofile/:id" element={<UpdateSupplierProfile />} />
          </Route>

          {/*Customer Management Routes*/}
          <Route path="/customerSignup" element={<AddCustomer />} />
          <Route path="/cLogin" element={<CustomerLogin />} />
          <Route path="/cdashboard" element={<Customer_DashBoard />} />
          <Route path="/cusprof/:id" element={<CustomerProfile />} />
          <Route path="/cusimg" element={<CustomerImage />} />


          {/*Finance Managment Routes*/}
          <Route path="/fdashboard" element={<Finance_Dashboard />} />
          <Route path="/paysheet" element={<AddSalary />} />
          <Route path="/viewpaysheet" element={<ViewPaysheet />} />
          <Route path="/updatepaysheet/:id" element={<UpdatePaysheet />} />
          <Route path="/salaryreport" element={<SalaryReport />} />

          {/*Booking Management*/}
          <Route path="/addb/:id" element={<AddBooking />} />
          <Route path="/viewb" element={<ViewBookings />} />
          <Route path="/disb" element={<DisplayBookings />} />
          <Route path="/genrep/:id" element={<GenReceipts />} />


          {/*Resource Management Routes*/}
          <Route path="/addres" element={<Addresources />} />
          <Route path="/viewres" element={<Viewresources />} />
          <Route path="/updateres/:id" element={<Updateresourse />} />
          <Route path="/disres" element={<DisplayResource />} />
          <Route path="/resdash" element={<ResourceDashboard/>}/>

          {/*Package Mangement Routes*/}
          <Route path="/addpac" element={<AddPackage />} />
          <Route path="/viewpac" element={<Viewpackage />} />
          <Route path="/updatepac/:id" element={<Updatepackage />} />

          {/*User Management Routes*/}
          <Route path="/addm" element={<AddManager />} />
          <Route path="/viewm" element={<ViewManager />} />
          <Route path="/updatem/:id" element={<UpdateManager />} />
          <Route path="/mdashboard" element={<Manager_Dashboard />} />
          <Route path="/mlogin" element={<ManagerLogin />} />

          {/*Tour Management*/}
          <Route path="/addtour" element={<AddTour />} />
          <Route path="/viewtour" element={<ViewTours />} />
          <Route path="/updatetour/:id" element={<UpdateTours />} />

          {/*Catering Management*/}
          <Route path="/addfood" element={<AddFood />} />
          <Route path="/viewfood" element={<ViewItems />} />
          <Route path="/updatefood/:id" element={<UpdateFood />} />
          <Route path="/foodreport" element={<FoodReport />} />
          {/* Employee Management */}

          <Route path="/add" element={<AddEmployee />} />
          <Route path="/dashboard" element={<EmployeeDashboard />} />
          <Route path="/updateemp/:id" element={<UpdateEmployee />} />
          <Route path="/viewprofile/:id" element={<ViewProfile />} />

          {/* Inventory Management */}
          <Route path="/item" element={<ItemHome />} />
          <Route path="/get/:id" element={<ItemDetails />} />
          <Route path="/editi/:id" element={<EditItem />} />
          <Route path="/addi" element={<CreateItem />} />
          <Route path="/reporti" element={<Report />} />

          {/* Supplier Materials*/}
          <Route path="/addmaterial" element={<AddMaterial />} />
          <Route path="/vmaterial" element={<ViewMaterial />} />
          <Route path="/mymaterial" element={<MyMaterials />} />
          <Route path="/supplierreport" element={<SupplierReport />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
