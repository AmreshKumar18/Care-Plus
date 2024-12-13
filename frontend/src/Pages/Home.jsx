import React, { useEffect } from "react";
import Welcome from "../Components/Welcome";
import Service from "../Components/Service";
import Why from "../Components/Why";
import Testinomials from "../Components/Testinomials";
import Collab from "../Components/Collab";
import News from "../Components/News";
import { UserData } from "../Context/UserContext";
import Promotion from "../Components/Promotion";

const Home = () => {
  // const { isAuth } = UserData();
  // console.log(isAuth);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Welcome />
      <Service />
      <Why />
      <Testinomials />
      <Collab />
      <News />
    </>
  );
};

export default Home;
