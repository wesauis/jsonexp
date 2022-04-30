import GridView from "./grid/GridView";
import PathContext, { useNewPathContext } from "./path/PathContext";
import sample from "./sample.json";

function Explorer() {
  const pathContext = useNewPathContext();

  return (
    <PathContext.Provider value={pathContext}>
      <GridView json={sample} />
    </PathContext.Provider>
  );
}

export default Explorer;
