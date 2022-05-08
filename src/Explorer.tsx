import { useEffect, useState } from "react";
import GridView from "./grid/GridView";
import Breadcrumb from "./path/Breadcrumb";
import PathContext, { useNewPathContext } from "./path/PathContext";

function Explorer() {
  const [json, setJson] = useState({});
  const pathContext = useNewPathContext();

  useEffect(() => {
    setJson((window as any).originalJson);

    const hash = window.location.hash.substring(1);
    if (!hash.startsWith("$")) return;
    if (hash == pathContext.path) return;

    console.log("Using base path:", hash);
    pathContext.setPath(hash);
  }, []);

  return (
    <PathContext.Provider value={pathContext}>
      <Breadcrumb />
      <GridView json={json} />
    </PathContext.Provider>
  );
}

export default Explorer;
