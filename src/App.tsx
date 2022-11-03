import "bootstrap/dist/css/bootstrap.css";
import "./app.css";
import { RouterProvider } from "react-router-dom";
import router from "./routes";

function App() {
  return <RouterProvider router={router} />;
}

export default App;
