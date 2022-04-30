import "./Explorer.css";
import GridView from "./grid/GridView";
import sample from "./sample.json";

function Explorer() {
  return <GridView json={sample} />;
}

export default Explorer;
