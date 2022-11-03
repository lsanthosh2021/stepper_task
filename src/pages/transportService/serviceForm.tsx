import { useState } from "react";
import DropForm from "../../components/stepper";
import categorization from "./categorization";
import companyInfromation from "./companyInformation";

export default function ServiceForm() {
  const [completed, setCompleted] = useState(0);
  const [data, setData] = useState<any>({
    wasteType: [],
    managerName: [{ label: "Name1", value: "Name1" }],
    partnerName: [{ label: "Name1", value: "Name1" }],
  });
  const setDataHandler = (key: string, value: string | string[]) => {
    setData((prev: any) => ({ ...prev, [key]: value }));
  };
  const checkDisable = (keys: any[]) =>
    keys?.filter((e: string) => !data?.[e]?.length)?.length;

  const disabledKeys = [
    ["transporterType", "wasteType"],
    [
      "crNumber",
      "commercialLicenseNumber",
      "nationalWasteCenterLicenseNumber",
      "nwcLicenseIssueDate",
      "nwcLicenseExpiryDate",
      "workingArea",
    ],
  ];

  return (
    <div className="mt-3 shadow rounded-2 mb-3">
      <div
        className="accordion accordion-flush rounded-2"
        id="accordionFlushExample"
      >
        {Renderdata.map((e, idx) => (
          <DropForm
            count={idx + 1}
            title={e.title}
            subTitle={
              idx
                ? ""
                : `${data.transporterType || ""} ${
                    data.wasteType.length
                      ? `,${data.wasteType.length} wastes types`
                      : ""
                  }`
            }
            isComplete={idx < completed}
            islast={idx === Renderdata.length - 1}
            onClickNext={() => {
              setCompleted(idx + 1);
            }}
            disabled={!!checkDisable(disabledKeys[idx])}
            onClickSubmit={() => alert(JSON.stringify(data))}
          >
            <div>{e.Render(data, setDataHandler)}</div>
          </DropForm>
        ))}
      </div>
    </div>
  );
}
const Renderdata = [
  {
    title: "Categorization",
    Render: categorization,
  },
  {
    title: "Compnay information",
    Render: companyInfromation,
  },
  {
    title: "Truck information",
    Render: () => <>Please Click Next, Check Your Data At 8th step</>,
  },
  {
    title: "Container information",
    Render: () => <>Please Click Next, Check Your Data At 8th step</>,
  },
  {
    title: "Labor information",
    Render: () => <>Please Click Next, Check Your Data At 8th step</>,
  },
  {
    title: "Location information",
    Render: () => <>Please Click Next, Check Your Data At 8th step</>,
  },
  {
    title: "Required documents",
    Render: () => <>Please Click Next, Check Your Data At 8th step</>,
  },
  {
    title: "Declarations and Commitments",
    Render: (data: any) => {
      const renderText = (e: any) => {
        if (Array.isArray(e)) {
          return e.map((e) => e.label || e).join(", ");
        }
        return e;
      };
      return (
        <>
          Check Your Data:
          <div className="d-flex gap-3">
            <div className="border rounded-3 p-3">
              {Object.keys(data).map((e: any) => (
                <p>{e}</p>
              ))}
            </div>
            <div className="border rounded-3 p-3">
              {Object.values(data).map((e: any) => (
                <p>{renderText(e)}</p>
              ))}
            </div>
          </div>
        </>
      );
    },
  },
];
