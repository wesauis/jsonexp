import { useEffect } from "react";
import GridView from "./grid/GridView";
import PathContext, { useNewPathContext } from "./path/PathContext";
import sample from "./sample.json";

function Explorer() {
  const pathContext = useNewPathContext();

  useEffect(() => {
    const hash = window.location.hash.substring(1);
    if (!hash.startsWith("$")) return;

    pathContext.setPath(hash);
  }, []);

  return (
    <PathContext.Provider value={pathContext}>
      <GridView json={sample} />
    </PathContext.Provider>
  );
}

export default Explorer;
