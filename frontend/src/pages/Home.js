import { useEffect, useState } from "react";

// components
import MalwareFileDetails from "../components/MalwareFileDetails";

const Home = () => {
  const [malFiles, setMalFiles] = useState(null);

  useEffect(() => {
    const fetchMalFiles = async () => {
      const response = await fetch("/api/malwarefiles");
      const json = await response.json();

      if (response.ok) {
        setMalFiles(json);
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
