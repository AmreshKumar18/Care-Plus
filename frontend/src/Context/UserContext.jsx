import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";
import toast, { Toaster } from "react-hot-toast";

const UserContext = createContext();

export const UserContextProvider = ({ children }) => {
  const [isAuth, setIsAuth] = useState(false);
  const [user, setUser] = useState({});

  // login user

  async function loginUser(email, password, navigate) {
    await axios
      .post("http://localhost:4000/api/user/login", {
        email,
        password,
      })
      .then(({ data }) => {
        sessionStorage.setItem("user", JSON.stringify(data));
        toast.success(data.message);
        setUser(data);
        setIsAuth(true);
      })
      .catch((error) => {
        toast.error(error.message);
      });
  }

  useEffect(() => {
    let userInSession = sessionStorage.getItem("user");
    if (userInSession) {
      setIsAuth(true);
      setUser(JSON.parse(userInSession));
    } else {
      setUser({ token: null });
    }
  }, []);

  // register user

  async function registerUser(
    image,
    fullname,
    dob,
    mob_no,
    adhar_no,
    blood_group,
    email,
    password,
    village,
    district,
    pincode,
    answer
  ) {
    try {
      const formData = new FormData(); // Create FormData object

      // Append all fields to FormData
      formData.append("image", image[0]); // Assuming image is from file input, use image[0]
      formData.append("fullname", fullname);
      formData.append("dob", dob);
      formData.append("mob_no", mob_no);
      formData.append("adhar_no", adhar_no);
      formData.append("blood_group", blood_group);
      formData.append("email", email);
      formData.append("password", password);
      formData.append("answer", answer);
      formData.append("village", village);
      formData.append("district", district);
      formData.append("pincode", pincode);
      const res = axios.post(
        "http://localhost:4000/api/user/register",
        formData,
        {
          headers: { "Content-Type": "multipart/form-data" }, // Correct content type for file upload
        }
      );
      if (res.data) {
        toast.success("Account Created Successfully");
      }
    } catch (error) {
      toast.error(error.response?.data?.message);
    }
  }

  // rating and reviews
  // const { id } = useParams();
  // console.log(id);
  // async function feedback(rating, comment) {
  //   try {
  //     const res = await axios.post(`http://localhost:4000/api/review/${id}`, {
  //       rating,
  //       comment,
  //     });
  //     if (res.data) {
  //       toast.success(res.data.message);
  //     }
  //   } catch (error) {
  //     toast.error(error.response?.data?.message);
  //   }
  // }

  // all hospitals
  const [hospitals, setHospitals] = useState([]);
  const [numHospital, setNumHospital] = useState(0);
  const allHospitals = async () => {
    try {
      const res = await axios.get("http://localhost:4000/api/hospitals/all");
      setHospitals(res.data.hospitals);
      setNumHospital(res.data.numHospital);
    } catch (error) {
      toast.error(error.response?.data?.message);
    }
  };
  useEffect(() => {
    allHospitals();
  }, []);

  // all jobs fetch
  const [jobs, setJobs] = useState([]);
  const allJobs = async (req, res) => {
    try {
      const res = await axios.get("http://localhost:4000/api/jobs/all");
      setJobs(res.data.totalsjobs);
    } catch (error) {
      toast.error(error.response?.data?.message);
    }
  };
  useEffect(() => {
    allJobs();
  }, []);

  // total users
  const [users, setUsers] = useState([]);
  const [numUsers, setNumUsers] = useState(0);

  const allUsers = async (req, res) => {
    const response = await axios.get("http://localhost:4000/api/all-users");
    // console.log(response.data.allUsers);
    setUsers(response.data.allUsers);
    setNumUsers(response.data);
    try {
    } catch (error) {
      toast.error(error.message);
    }
  };
  useEffect(() => {
    allUsers();
  }, []);

  // awarness
  const [awarness, setAwarness] = useState([]);
  const getAllAwarness = async () => {
    try {
      const res = await axios.get("http://localhost:4000/api/get-all-awarness");
      setAwarness(res.data.awarness);
      // console.log(res.data.awarness);
    } catch (error) {
      toast.error(error.response?.data?.message);
    }
  };
  useEffect(() => {
    getAllAwarness();
  }, []);
  // logout user

  function logoutUser() {
    localStorage.removeItem("token");
    sessionStorage.removeItem("user");
    setIsAuth(false);
    setUser(null);
  }
  return (
    <UserContext.Provider
      value={{
        loginUser,
        registerUser,
        hospitals,
        numHospital,
        jobs,
        isAuth,
        logoutUser,
        user,
        users,
        numUsers,
        awarness,
      }}
    >
      {children}
      <Toaster />
    </UserContext.Provider>
  );
};

export const UserData = () => useContext(UserContext);
