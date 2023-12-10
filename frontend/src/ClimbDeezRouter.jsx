import React from "react";
import { BrowserRouter } from "react-router-dom";
import ClimbDeezWebAppContainer from "./ClimbDeezWebAppContainer";

const ClimbDeezRouter = () => {
  return (
    <BrowserRouter>
      <ClimbDeezWebAppContainer />
    </BrowserRouter>
  );
};

export default ClimbDeezRouter;
