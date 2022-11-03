import React from "react";
type props = {
  options: {
    label: { title: string; description: string } | string;
    value: string;
  }[];
  value: string | string[];
  onChange: (arg: string | string[]) => void;
  isCheckbox?: boolean;
};
export default function RadioInput({
  options,
  value,
  onChange,
  isCheckbox,
}: props) {
  return (
    <div className="border border-2 rounded p-3 h-100">
      {options.map((option, i) => (
        <div
          className={`d-flex cursor-pointer ${i ? "mt-3" : ""}`}
          key={i}
          onClick={() => {
            if (isCheckbox) {
              const temp = [...value];
              if (temp.includes(option.value)) {
                const index = temp.indexOf(option.value);
                temp.splice(index, 1);
              } else {
                temp.push(option.value);
              }
              onChange(temp);
            } else {
              onChange(option.value);
            }
          }}
        >
          {isCheckbox ? (
            value.includes(option.value) ? (
              <svg
                className="me-3"
                width="25"
                height="24"
                viewBox="0 0 25 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1 3C1 1.61929 2.11929 0.5 3.5 0.5H21.5C22.8807 0.5 24 1.61929 24 3V21C24 22.3807 22.8807 23.5 21.5 23.5H3.5C2.11929 23.5 1 22.3807 1 21V3Z"
                  fill="#009378"
                  stroke="#009378"
                />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M9.5 15.5858L18.7929 6.29289C19.1834 5.90237 19.8166 5.90237 20.2071 6.29289C20.5976 6.68342 20.5976 7.31658 20.2071 7.70711L10.2071 17.7071C9.81658 18.0976 9.18342 18.0976 8.79289 17.7071L4.79289 13.7071C4.40237 13.3166 4.40237 12.6834 4.79289 12.2929C5.18342 11.9024 5.81658 11.9024 6.20711 12.2929L9.5 15.5858Z"
                  fill="white"
                />
              </svg>
            ) : (
              <svg
                className="me-3"
                width="25"
                height="24"
                viewBox="0 0 25 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1 3C1 1.61929 2.11929 0.5 3.5 0.5H21.5C22.8807 0.5 24 1.61929 24 3V21C24 22.3807 22.8807 23.5 21.5 23.5H3.5C2.11929 23.5 1 22.3807 1 21V3Z"
                  fill="white"
                  stroke="#577485"
                />
              </svg>
            )
          ) : (
            <svg
              className="me-3 mt-1"
              width="25"
              height="25"
              viewBox="0 0 25 25"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1 12.5C1 6.14873 6.14873 1 12.5 1C18.8513 1 24 6.14873 24 12.5C24 18.8513 18.8513 24 12.5 24C6.14873 24 1 18.8513 1 12.5Z"
                stroke={option.value === value ? "#009378" : "#3B5E71"}
              />
              {option.value === value && (
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M12.5 5.5C8.63401 5.5 5.5 8.63401 5.5 12.5C5.5 16.366 8.63401 19.5 12.5 19.5C16.366 19.5 19.5 16.366 19.5 12.5C19.5 8.63401 16.366 5.5 12.5 5.5Z"
                  fill="#009378"
                />
              )}
            </svg>
          )}
          <div>
            <p className="mb-0 text-option-title fs-18">
              {typeof option.label === "object"
                ? option.label.title
                : option.label}
            </p>
            {typeof option.label === "object" && (
              <p className="mb-0 text-title fw-light fs-14">
                {option.label.description}
              </p>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}
