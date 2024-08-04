import { useEffect, useState } from "react";
import ProjectCard from "../screenComponents/ProjectCard";
import Loader from "../screenComponents/loaders/Loader";

function MyWork() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {

    const timer = setTimeout(() => {
      setLoading(false);
    }, 500);

    return () => clearTimeout(timer);
  }, []);



  return (
    <div className="w-full text-gray-500">
      {loading ? <Loader /> : <ProjectCard />}
    </div>
  );
}

export default MyWork;
