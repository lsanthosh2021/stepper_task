import { useDropzone } from "react-dropzone";

const ImageUpload = ({ children, onChange }: any) => {
  const { getRootProps, getInputProps } = useDropzone({
    accept: {
      "image/*": [".png", ".jpg", ".jpeg"],
    },
    onDrop: (acceptedFiles: any) => {
      onChange("companyImage", acceptedFiles[0]);
    },
  });
  return (
    <div
      {...getRootProps({
        className: "dropzone",
      })}
    >
      <input {...getInputProps()} />
      {children}
    </div>
  );
};
export default ImageUpload;
