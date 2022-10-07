import { useEffect, useState } from "react";

// components
import MalwareFileDetails from "../components/MalwareFileDetails";
import MalwareFileZipUploadForm from "../components/MalwareFileZipUploadForm";
import { useMalwareFilesContext } from "../hooks/useMalwareFilesContext";

const UploadPage = () => {
  const { malFiles, dupeFiles, dispatch } = useMalwareFilesContext();

  const SubmitFiles = async (e) => {
    e.preventDefault();
    const response = await fetch("/api/malwarefiles/submitfiles", {
      method: "POST",
      body: JSON.stringify(malFiles),
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
        {(malFiles && !dupeFiles)&&(
          <form className="submitFiles" onSubmit={SubmitFiles}>
            <button type="submit">Upload Files</button>
          </form>
        )}
        {malFiles && <div>Eliglble Files</div>}
        {malFiles &&
          malFiles.map((malFile) => (
            <MalwareFileDetails
              malFile={malFile}
              key={malFiles.indexOf(malFile)}
            />
          ))}
        {dupeFiles && <div>Ineligible Files</div>}
        {dupeFiles &&
          dupeFiles.map((dupeFile) => (
            <MalwareFileDetails
              malFile={dupeFile}
              key={dupeFiles.indexOf(dupeFile)}
            />
          ))}
      </div>
      <MalwareFileZipUploadForm />
    </div>
  );
};

export default UploadPage;
