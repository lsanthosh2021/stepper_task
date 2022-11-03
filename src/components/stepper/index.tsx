import Button from "../button";
type props = {
  count: number;
  title: string;
  subTitle: string;
  isComplete: boolean;
  onClickNext: () => void;
  onClickSubmit: () => void;
  islast: boolean;
  children: any;
  disabled: boolean;
};
const DropForm = ({
  count,
  title,
  subTitle,
  isComplete,
  onClickNext,
  onClickSubmit,
  islast,
  children,
  disabled,
}: props) => {
  return (
    <>
      <div className="accordion-item rounded-2 px-5 py-3">
        <div className="accordion-header" id={"flush-heading" + count}>
          <div className="d-flex align-items-center">
            {isComplete ? (
              <svg
                className="me-3"
                width="32"
                height="32"
                viewBox="0 0 32 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle
                  cx="16"
                  cy="15.9999"
                  r="15.5"
                  fill="#009378"
                  stroke="#009378"
                />
                <path
                  d="M13.8112 18.2231L10.9656 15.3775L10 16.3431L13.8112 20.1543L22 11.9655L21.0344 10.9999L13.8112 18.2231Z"
                  fill="white"
                />
              </svg>
            ) : (
              <p className="mb-0 d-flex align-items-center justify-content-center me-3 rounded-5 countStyle">
                {count}
              </p>
            )}
            <p
              className={"h3 mb-0 me-3 " + (isComplete ? "" : "fw-light")}
              style={{ color: isComplete ? "#233F4D" : "#3B5E71" }}
            >
              {title}
            </p>
            <p className="mb-0 mt-1" style={{ color: "#3B5E71" }}>
              {subTitle}
            </p>
            <svg
              className="ms-auto arrow-svg"
              width="16"
              height="11"
              viewBox="0 0 16 11"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M14.1133 0.446716L8 6.56005L1.88667 0.446716L0 2.33338L8 10.3334L16 2.33338L14.1133 0.446716Z"
                fill="#009378"
              />
            </svg>
          </div>
        </div>
        <div
          id={"flush-collapse" + count}
          className={`accordion-collapse collapse ${
            count === 1 ? "show" : ""
          } ms-5`}
          aria-labelledby={"flush-heading" + count}
          data-bs-parent="#accordionFlushExample"
        >
          <div className="accordion-body">
            {children}
            <div className="mt-4">
              <Button
                disabled={disabled}
                title={islast ? "Submit" : "Next"}
                onClick={islast ? onClickSubmit : onClickNext}
                className="collapsed rounded-2"
                data-bs-toggle="collapse"
                data-bs-target={"#flush-collapse" + (count + 1)}
                aria-expanded="false"
                aria-controls={"flush-collapse" + (count + 1)}
              />
              {count === 1 ? null : (
                <Button
                  title="Back"
                  className="rounded-2 ms-3"
                  data-bs-toggle="collapse"
                  data-bs-target={"#flush-collapse" + (count - 1)}
                  aria-expanded="false"
                  aria-controls={"flush-collapse" + (count - 1)}
                />
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default DropForm;
