import { useEffect } from "react";

// components
import MalwareFileDetails from "../components/MalwareFileDetails";
import MalwareFileZipUploadForm from "../components/MalwareFileZipUploadForm";
import { useMalwareFilesContext } from "../hooks/useMalwareFilesContext";

const UploadPage = () => {
  const { malFiles, dupeFiles, dispatch } = useMalwareFilesContext();

  return (
    <div className="home">
      <div className="malFiles">
        {malFiles && <div>Uploaded</div>}
        {malFiles &&
          malFiles.map((malFile) => (
            <MalwareFileDetails malFile={malFile} key={malFile._id} />
          ))}
        {dupeFiles && <div>Not Uploaded</div>}
        {dupeFiles &&
          dupeFiles.map((dupeFile) => (
            <MalwareFileDetails
              malFile={dupeFile}
              key={dupeFiles.indexOf(dupeFile)}
            />
          ))}
      </div>
      {(!malFiles && !dupeFiles) && <MalwareFileZipUploadForm />}
    </div>
  );
};

export default UploadPage;
