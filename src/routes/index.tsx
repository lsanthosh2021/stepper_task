import { createBrowserRouter, Link, Outlet } from "react-router-dom";
import BreadCrums from "../components/breadcrums";
import Home from "../pages/home";
import TransportService from "../pages/transportService";

const errorElement = (
  <div className="d-flex flex-column align-items-center justify-content-center h-75">
    <h1 className="text-danger">
      <span className="px-3 border border-danger rounded-5 me-3">!</span>
      Development Inprogress
    </h1>
    <Link to={"/"} className="btn btn-secondary">
      Back to Home
    </Link>
  </div>
);

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement,
  },
  {
    path: "services",
    children: [
      {
        index: true,
        element: (
          <div className="container mt-3">
            <h1>Services</h1>
            <BreadCrums
              links={[
                { title: "Home", link: "/" },
                { title: "Services", link: "/services" },
              ]}
            />
          </div>
        ),
      },
      {
        path: "transporter_services",
        element: <TransportService />,
      },
    ],
  },
]);
export default router;
