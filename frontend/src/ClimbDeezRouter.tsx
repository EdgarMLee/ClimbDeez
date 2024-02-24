import { BrowserRouter } from "react-router-dom";
import ClimbDeezWebAppContainer from "./ClimbDeezWebAppContainer";
import React, { ReactElement } from "react";

("use strict");

const ClimbDeezRouter = (): ReactElement => {
  return (
    <BrowserRouter>
      <ClimbDeezWebAppContainer />
    </BrowserRouter>
  );
};

export default ClimbDeezRouter;
