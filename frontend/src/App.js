import "./App.css";
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
  useNavigate,
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Login from "./Pages/Login";
import Awarness from "./Pages/Awarness";
import Jobs from "./Pages/Jobs";
import Complaint from "./Pages/Complaint";
import Emergency from "./Pages/Emergency";
import Hospitals from "./Pages/Hospitals";
import Register from "./Pages/Register";
import Contact from "./Pages/Contact";
import HospitalDetails from "./Pages/HospitalDetails";
import Profile from "./Pages/Profile";
import Appointment from "./Pages/Appointment";
import MyBilling from "./Pages/MyBilling";
import { UserData } from "./Context/UserContext";
import Jobdetails from "./Pages/Jobdetails";
import Dashboard from "./Pages/Admin/Dashboard";
import Doctors from "./Pages/Admin/Doctors";
import Appointments from "./Pages/Admin/Appointments";
import Layout from "./Client Layout/Layout";
import Main from "./Pages/Admin/Main";
import Beds from "./Pages/Admin/Beds";
import Ambulances from "./Pages/Admin/Ambulances";
import Medicals from "./Pages/Admin/Medicals";
import Carrer from "./Pages/Admin/Carrer";
import Hospitallayout from "./Pages/Hospital/Hospitallayout";
import HospitalHome from "./Pages/Hospital/HospitalHome";
import AddHospital from "./Pages/Hospital/AddHospital";
import AwarnessDetails from "./Pages/AwarnessDetails";
import AddAwarness from "./Pages/Admin/AddAwarness";
import Users from "./Pages/Admin/Users";
import ResetPassword from "./Components/ResetPassword";
import Notifications from "./Pages/Notifications";
import Franchise from "./Pages/Franchise";
import AddEquipment from "./Pages/Hospital/AddEquipment";
import Notification from "./Pages/Admin/Notification";
import Queries from "./Pages/Queries";
import AllContact from "./Pages/Admin/AllContact";
import CancellationPolicy from "./Pages/CancellationPolicy";
import RefundPolicy from "./Pages/RefundPolicy";
import Promotions from "./Pages/Promotions";
import PublicRoute from "./Context/PublicRoute";
import Equipment from "./Components/Equipment";
import PaymentHistory from "./Pages/Admin/PaymentHistory";
import UpdateProfile from "./Pages/UpdateProfile";
import UpdateAppointment from "./Pages/Admin/UpdateAppointment";

const PrivateRoute = ({ element: Element, ...rest }) => {
  const user = JSON.parse(sessionStorage.getItem("user"));
  if (user) {
    return <Element {...rest} />;
  } else {
    return <Navigate to="/login" replace />;
  }
};

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "about",
          element: <About />,
        },
        {
          path: "/hospitals",
          element: <Hospitals />,
        },
        {
          path: "/emergency",
          element: <Emergency />,
        },
        {
          path: "/digital-cilinic",
          element: <Franchise />,
        },
        {
          path: "/complaint",
          element: <Complaint />,
        },
        {
          path: "/jobs",
          element: <Jobs />,
        },
        {
          path: "/awarness",
          element: <Awarness />,
        },
        {
          path: "/contact",
          element: <Contact />,
        },
        {
          path: "/login",
          element: <PublicRoute element={<Login />} />,
        },
        {
          path: "/register",
          element: <PublicRoute element={<Register />} />,
        },
        {
          path: "/profile",
          element: <PrivateRoute element={Profile} />,
        },
        {
          path: "/my-appointment",
          element: <PrivateRoute element={Appointment} />,
        },
        {
          path: "/my-billings",
          element: <PrivateRoute element={MyBilling} />,
        },
        {
          path: "/hospitals-details/:id",
          element: <HospitalDetails />,
        },
        // when apply job make protected through isAuth in controller
        {
          path: "/job-details/:id",
          element: <Jobdetails />,
        },
        {
          path: "/awarness-details/:id",
          element: <AwarnessDetails />,
        },
        {
          path: "/reset-password",
          element: <PublicRoute element={<ResetPassword />} />,
        },
        {
          path: "/notifications",
          element: <Notifications />,
        },
        {
          path: "/cancellation-policy",
          element: <CancellationPolicy />,
        },
        {
          path: "/refund-policy",
          element: <RefundPolicy />,
        },
        {
          path: "/promotions",
          element: <Promotions />,
        },
        {
          path: "/update-profile/:id",
          element: <UpdateProfile />,
        },
      ],
    },
    {
      path: "/admin",
      element: <Main />,
      children: [
        {
          path: "/admin/dashboard",
          element: <PrivateRoute element={Dashboard} />,
        },
        {
          path: "/admin/doctors/:id",
          element: <PrivateRoute element={Doctors} />,
        },
        {
          path: "/admin/add-hospital",
          element: <PrivateRoute element={AddHospital} />,
        },
        {
          path: "/admin/appointments",
          element: <PrivateRoute element={Appointments} />,
        },
        {
          path: "/admin/beds",
          element: <PrivateRoute element={Beds} />,
        },
        {
          path: "/admin/ambulances/:id",
          element: <PrivateRoute element={Ambulances} />,
        },

        {
          path: "/admin/medicals",
          element: <PrivateRoute element={Medicals} />,
        },
        {
          path: "/admin/equipments/:id",
          element: <PrivateRoute element={AddEquipment} />,
        },
        {
          path: "/admin/jobs",
          element: <PrivateRoute element={Carrer} />,
        },
        {
          path: "/admin/add-awarness",
          element: <PrivateRoute element={AddAwarness} />,
        },
        {
          path: "/admin/users",
          element: <PrivateRoute element={Users} />,
        },
        {
          path: "/admin/notification",
          element: <PrivateRoute element={Notification} />,
        },
        {
          path: "/admin/queries",
          element: <PrivateRoute element={Queries} />,
        },
        {
          path: "/admin/contact",
          element: <PrivateRoute element={AllContact} />,
        },
        {
          path: "/admin/all-bill",
          element: <PrivateRoute element={PaymentHistory} />,
        },
        {
          path: "/admin/update-user-profile/:id",
          element: <PrivateRoute element={UpdateProfile} />,
        },
        {
          path: "/admin/update-appointment/:id",
          element: <PrivateRoute element={UpdateAppointment} />,
        },
      ],
    },
    {
      path: "/hospital",
      element: <Hospitallayout />,
      children: [
        {
          path: "/hospital/home",
          element: <PublicRoute element={<HospitalHome />} />,
        },
        {
          path: "/hospital/ambulance/:id",
          element: <PublicRoute element={<Ambulances />} />,
        },
        {
          path: "/hospital/add-hospital",
          element: <PublicRoute element={<AddHospital />} />,
        },
        {
          path: "/hospital/doctors/:id",
          element: <PublicRoute element={<Doctors />} />,
        },
        {
          path: "/hospital/medicals",
          element: <PublicRoute element={<Medicals />} />,
        },
        {
          path: "/hospital/equipments",
          element: <PublicRoute element={<Equipment />} />,
        },
        {
          path: "/hospital/jobs",
          element: <PublicRoute element={<Carrer />} />,
        },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
  // return (
  //   <BrowserRouter>
  //     <Navbar />

  //     <Routes>
  //       <Route path="/" element={<Home />} />
  //       <Route path="/about" element={<About />} />
  //       <Route path="/hospitals" element={<Hospitals />} />
  //       <Route path="/emergency" element={<Emergency />} />
  //       <Route path="/complaint" element={<Complaint />} />
  //       <Route path="/jobs" element={<Jobs />} />
  //       <Route path="/awarness" element={<Awarness />} />
  //       <Route path="/contact" element={<Contact />} />
  //       <Route path="/login" element={<Login />} />
  //       <Route path="/register" element={<Register />} />
  //       <Route path="/hospitals-details/:id" element={<HospitalDetails />} />
  //       <Route path="/job-details/:id" element={<Jobdetails />} />
  //       <Route
  //         path="/profile"
  //         element={isAuth ? <Profile /> : <Navigate to="/login" />}
  //       />
  //       <Route path="/patient-appointment" element={<Appointment />} />
  //       <Route path="/mybookmarks" element={<Mybookmark />} />
  //       <Route path="/my-prescriptions" element={<Prescription />} />
  //       <Route path="/admin-dashboard" element={<Dashboard />} />
  //       <Route path="/appointments" element={<Appointments />} />
  //       <Route path="/admin-dashboard" element={<Doctors />} />
  //     </Routes>
  //     <Footer />
  //   </BrowserRouter>
  // );
}

export default App;
