import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

// components
import MalwareFileDetails from "../components/MalwareFileDetails";
import { useMalwareFilesContext } from "../hooks/useMalwareFilesContext";

const SearchPage = () => {
  const { hash } = useParams();
  const { malFiles, dispatch } = useMalwareFilesContext();
  const [searchresults, setSearchResults] = useState(false);

  useEffect(() => {
    const searchMalFiles = async () => {
      const response = await fetch("/api/malwarefiles/search/" + hash);
      const json = await response.json();
      
      if (response.ok) {
        dispatch({ type: "SET_MALWAREFILES", payload: json });
      }
      if (json.length > 0) {
        setSearchResults(true);
      }
      if (json.length === 0) {
        setSearchResults(false);
      }
    };

    searchMalFiles();
  }, [hash]);

  return (
    <div className="searchpage">
      <div className="malFiles">
        {!searchresults && <div>No Results</div>}
        {malFiles &&
          malFiles.map((malFile) => (
            <MalwareFileDetails malFile={malFile} key={malFile._id} />
          ))}
      </div>
    </div>
  );
};

export default SearchPage;
