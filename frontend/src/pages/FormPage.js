import { useEffect} from "react";

// components
import MalwareFileDetails from "../components/MalwareFileDetails";
import MalwareFileZipUploadForm from "../components/MalwareFileZipUploadForm";
import { useMalwareFilesContext } from "../hooks/useMalwareFilesContext";

const FormPage = () => {

  return (
    <div className="formpage">
      <MalwareFileZipUploadForm />
    </div>
  );
};

export default FormPage;