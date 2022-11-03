import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="d-flex flex-column align-items-center justify-content-center h-75">
      <h1>Appswave React Assigment</h1>
      <Link to="services/transporter_services" className="btn btn-primary w-25">
        Start
      </Link>
    </div>
  );
}
