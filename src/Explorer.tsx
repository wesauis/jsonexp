import GridView from "./components/gridview/GridView";
import "./Explorer.css";
import sample from "./sample.json";

function Explorer() {
  return <GridView json={sample} />;
}

export default Explorer;
