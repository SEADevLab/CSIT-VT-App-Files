import { useEffect} from "react";

// components
import MalwareFileDetails from "../components/MalwareFileDetails";
import MalwareFileZipUploadForm from "../components/MalwareFileZipUploadForm";
import { useMalwareFilesContext } from "../hooks/useMalwareFilesContext";

const Home = () => {
  const {malFiles,dispatch} = useMalwareFilesContext()

  useEffect(() => {
    const fetchMalFiles = async () => {
      const response = await fetch("/api/malwarefiles");
      const json = await response.json();

      if (response.ok) {
        dispatch({type:'SET_MALWAREFILES',payload:json})
      }
    };

    fetchMalFiles();
  }, []);

  return (
    <div className="home">
      <div className="malFiles">
        {malFiles &&
          malFiles.map((malFile) => (
            <MalwareFileDetails malFile={malFile} key={malFile._id} />
          ))}
      </div>
    </div>
  );
};

export default Home;
