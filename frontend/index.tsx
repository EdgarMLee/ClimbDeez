import { createRoot } from "react-dom/client";
import ClimbDeezRouter from "./src/ClimbDeezRouter.jsx";

const rootNode = document.getElementById("root");
if (!rootNode) {
  throw new DOMException();
}
const root = createRoot(rootNode);
root.render(<ClimbDeezRouter />);
