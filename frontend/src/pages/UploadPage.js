import { useEffect, useState } from "react";

// components
import MalwareFileDetails from "../components/MalwareFileDetails";
import { useMalwareFilesContext } from "../hooks/useMalwareFilesContext";

const UploadPage = () => {
  const { uploadFiles, dupeFiles, dispatch } = useMalwareFilesContext();
  if (uploadFiles===null || dupeFiles === null) {
    return (
      <div className="home">
        <h3>Please Submit The Form</h3>
      </div>)
  }

  const SubmitFiles = async (e) => {
    e.preventDefault();
    const response = await fetch("/api/malwarefiles/submitfiles", {
      method: "POST",
      body: JSON.stringify(uploadFiles),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const json = await response.json();
    console.log("Files Uploaded", json);
  };

  return (
    <div className="home">
      <div className="malFiles">
        {uploadFiles.length > 0 && (
          <form className="submitFiles" onSubmit={SubmitFiles}>
            <button type="submit">Upload Files</button>
          </form>
        )}
        {uploadFiles.length > 0 && <h4>Eligible Files</h4>}
        {uploadFiles &&
          uploadFiles.map((malFile) => (
            <MalwareFileDetails
              malFile={malFile}
              key={uploadFiles.indexOf(malFile)}
            />
          ))}
        {dupeFiles.length > 0 && <h4>Ineligible Files</h4>}
        {dupeFiles &&
          dupeFiles.map((dupeFile) => (
            <MalwareFileDetails
              malFile={dupeFile}
              key={dupeFiles.indexOf(dupeFile)}
            />
          ))}
      </div>
    </div>
  );
};

export default UploadPage;
