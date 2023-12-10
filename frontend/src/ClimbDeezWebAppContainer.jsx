import React, { ReactNode } from "react";
import SimpleButton from "./ui_library/buttons/SimpleButton";
function ClimbDeezWebAppContainer() {
  return (
    <div className="ClimbDeez-Container">
      <h1>ClimbDeez React App!</h1>
      <SimpleButton
        label="Click me"
        onClickFn={() => null}
        onHoverFn={() => null}
      />
    </div>
  );
}

export default ClimbDeezWebAppContainer;
