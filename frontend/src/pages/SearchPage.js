import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";

// components
import MalwareFileDetails from "../components/MalwareFileDetails";
import { useMalwareFilesContext } from "../hooks/useMalwareFilesContext";

const SearchPage = () => {
  const { hash } = useParams();
  const { malFiles, dispatch } = useMalwareFilesContext();

  useEffect(() => {
    const searchMalFiles = async () => {
      const response = await fetch("/api/malwarefiles/search/" + hash);
      const json = await response.json();

      if(!response.ok){
        console.log('Bruh');
      }

      if (response.ok) {
        dispatch({ type: "SET_MALWAREFILES", payload: json });
      }
    };

    searchMalFiles();
  }, []);

  return (
    <div className="searchpage">
      <div className="malFiles">
        {malFiles &&
          malFiles.map((malFile) => (
            <MalwareFileDetails malFile={malFile} key={malFile._id} />
          ))}
      </div>
    </div>
  );
};

export default SearchPage;
