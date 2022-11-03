import image1 from "../../assets/image1.svg";
import Button from "../../components/button";
import ImageUpload from "../../components/ImageUpload";
import Select from "react-select";
import RadioInput from "../../components/radioInput";

const companyInfromation = (
  data: any,
  setDataHandler: (key: string, value: string | string[]) => void
) => {
  const inputRegister = (key: string) => ({
    value: data[key] ?? "",
    onChange: (e: { target: { value: string } }) => {
      setDataHandler(key, e.target.value);
    },
  });
  const nameList = [
    { label: "Name1", value: "Name1" },
    { label: "Name2", value: "Name2" },
    { label: "Name3", value: "Name3" },
    { label: "Name4", value: "Name4" },
  ];
  return (
    <>
      <p className="fw-light text-subtitle">
        Please Enter your company information
      </p>
      <p className="fw-bold text-option-title">CR number *</p>
      <input placeholder="Write something" {...inputRegister("crNumber")} />
      <div className="rounded-3 border p-3">
        <div>
          <p className="fw-bold text-option-title">Company name</p>
          <input
            placeholder="Enter Company name"
            className="bg-white border-top"
            {...inputRegister("companyName")}
          />
        </div>
        <div>
          <p className="fw-bold text-option-title">Manager name</p>
          <Select
            classNamePrefix={"react-select"}
            closeMenuOnSelect={false}
            isMulti
            options={nameList}
            value={data.managerName}
            onChange={(v: any) => setDataHandler("managerName", v)}
          />
        </div>
        <div>
          <p className="fw-bold text-option-title">Partner name</p>
          <Select
            classNamePrefix={"react-select"}
            closeMenuOnSelect={false}
            isMulti
            options={nameList}
            value={data.partnerName}
            onChange={(v: any) => setDataHandler("partnerName", v)}
          />
        </div>
        <div className="d-flex gap-5">
          <div>
            <p className="fw-bold text-option-title">CR Issue date</p>
            <input
              placeholder="Select date"
              type={"date"}
              className="bg-white border-top"
              {...inputRegister("crIssueDate")}
            />
          </div>
          <div>
            <p className="fw-bold text-option-title">CR Expiry date</p>
            <input
              placeholder="Select date"
              type={"date"}
              className="bg-white border-top"
              {...inputRegister("crExpireDate")}
            />
          </div>
        </div>
      </div>
      <p className="fw-bold text-option-title">Commercial License Number *</p>
      <input
        placeholder="Write numbers"
        {...inputRegister("commercialLicenseNumber")}
      />
      <div className="d-flex gap-5 rounded-3 border p-3">
        <div>
          <p className="fw-bold text-option-title">
            Commercial License Issue date
          </p>
          <input
            placeholder="Select date"
            type={"date"}
            className="bg-white border-top"
            {...inputRegister("commercialLicenseIssuedate")}
          />
        </div>
        <div>
          <p className="fw-bold text-option-title">
            Commercial License Expiry date
          </p>
          <input
            placeholder="Select date"
            type={"date"}
            className="bg-white border-top"
            {...inputRegister("commercialLicenseExpiredate")}
          />
        </div>
      </div>
      <p className="fw-bold text-option-title">
        National Waste Center License Number *
      </p>
      <input
        placeholder="Write numbesr"
        {...inputRegister("nationalWasteCenterLicenseNumber")}
      />
      <div className="d-flex gap-3">
        <div>
          <p className="fw-bold text-option-title">License Issue date *</p>
          <input
            placeholder="Select Date"
            type={"date"}
            {...inputRegister("nwcLicenseIssueDate")}
          />
        </div>
        <div>
          <p className="fw-bold text-option-title">License Expiry date *</p>
          <input
            placeholder="Select Date"
            type={"date"}
            {...inputRegister("nwcLicenseExpiryDate")}
          />
        </div>
      </div>
      <p className="fw-bold text-option-title">Working area*</p>
      <div className="d-flex gap-3">
        <div className="w-50">
          <RadioInput
            isCheckbox
            options={[
              { label: "Alaqiq", value: "Alaqiq" },
              { label: "Quibaa", value: "Quibaa" },
              { label: "Alawali", value: "Alawali" },
              { label: "Uhud", value: "Uhud" },
            ]}
            value={data.workingArea ?? []}
            onChange={(v) => setDataHandler("workingArea", v)}
          />
        </div>
        <div>
          <img src={image1} />
        </div>
      </div>
      <p className="fw-bold text-option-title mt-4">Company Image</p>
      <div className="border rounded-3 mt-3 p-4">
        <div className="d-flex gap-3">
          <ImageUpload onChange={(v: any) => setDataHandler("companyImage", v)}>
            <Button title="Select File" />
          </ImageUpload>
          <p className="mb-0 fw-light">Select Png,Jpeg maximum 5Mb image</p>
        </div>
      </div>
    </>
  );
};
export default companyInfromation;
