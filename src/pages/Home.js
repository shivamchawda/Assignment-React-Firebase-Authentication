import React, { useContext } from "react";

import { Redirect } from "react-router-dom";
import { UserContext } from "../context/UserContext";

const Home = () => {
  const context = useContext(UserContext);

  //PUTTING EVERYTHING BEHIND LOGIN//

  if (!context.user?.uid) {
    return <Redirect to="/signin" />;
  }

  return (
    <>
    <br/>
   <h1>Congratulations! you are successfully Registered </h1>
   <br/>
   </>
  );
};

export default Home;
