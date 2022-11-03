import RadioInput from "../../components/radioInput";

const categorization = (
  data: any,
  setDataHandler: (key: string, value: string | string[]) => void
) => (
  <div className="d-flex gap-3 h-100">
    <div className="w-50 h-100">
      <h4 className="text-title">Transporter type</h4>
      <p className="text-subtitle fw-light">Please select your type.</p>
      <RadioInput
        options={[
          {
            label: {
              title: "Digging Contractor",
              description:
                "Description will be here for the type, Description will be here for the type",
            },
            value: "Digging Contractor",
          },
          {
            label: {
              title: "Private Transporter",
              description: "Description will be here for the type",
            },
            value: "Private Transporter",
          },
          {
            label: {
              title: "Construction and commercial waste transportation company",
              description: "Description will be here for the type",
            },
            value: "Commercial Transporter",
          },
        ]}
        value={data.transporterType}
        onChange={(v) => setDataHandler("transporterType", v)}
      />
    </div>
    <div className="w-50 h-100">
      <h4 className="text-title">Waste Type</h4>
      <p className="text-subtitle fw-light">Please select your type.</p>
      <RadioInput
        isCheckbox
        options={[
          {
            label: "Commercial Activities",
            value: "Commercial Activities",
          },
          {
            label: "Construction Waste",
            value: "Construction Waste",
          },
          {
            label: "Special Medical waste",
            value: "Special Medical waste",
          },
          {
            label: "Treated medical waste",
            value: "Treated medical waste",
          },
          {
            label: "Sewage Water",
            value: "Sewage Water",
          },
        ]}
        value={data.wasteType}
        onChange={(v) => setDataHandler("wasteType", v)}
      />
    </div>
  </div>
);
export default categorization;
