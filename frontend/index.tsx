import { createRoot } from "react-dom/client";
import ClimbDeezWebAppContainer from "./src/ClimbDeezWebAppContainer.jsx";

const rootNode = document.getElementById("root");
if (!rootNode) {
  throw new DOMException();
}
const root = createRoot(rootNode);
root.render(<ClimbDeezWebAppContainer />);
