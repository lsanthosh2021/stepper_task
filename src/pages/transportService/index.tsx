import React from "react";
import BreadCrums from "../../components/breadcrums";
import Button from "../../components/button";
import ServiceForm from "./serviceForm";

export default function TransportService() {
  return (
    <div className="container mt-3 pb-5">
      <div className="d-flex align-items-center justify-content-between">
        <div>
          <h3>Obtaining Transporter Qualification Service</h3>
          <BreadCrums
            links={[
              { title: "Home", link: "/" },
              { title: "Services", link: "/services" },
              {
                title: "Transporter services",
                link: "/services/transporter_services",
              },
            ]}
          />
        </div>
        <Button
          title="Rate service"
          outline
          onClick={() => {
            location.href = "/rate_service";
          }}
        />
      </div>
      <ServiceForm />
    </div>
  );
}
