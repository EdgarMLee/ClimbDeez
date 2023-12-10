import React, { ReactNode } from "react";
import SimpleButton from "./fortress/buttons/SimpleButton";
function ClimbDeezWebAppContainer() {
  return (
    <div className="ClimbDeez-Container">
      <h1>ClimbDeez React App!</h1>
      <SimpleButton
        label="Click me"
        onClickFn={() => null}
        onHoverFn={() => null}
      />
      <a href="https://github.com/EdgarMLee/ClimbDeez/">GitHub</a>
    </div>
  );
}

export default ClimbDeezWebAppContainer;
