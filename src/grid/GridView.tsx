import jsonpath from "jsonpath";
import { FC } from "react";
import "./GridView.scss";
import MapType from "./MapType";

export interface GridViewProps {
  json: any;
}

const GridView: FC<GridViewProps> = ({ json }) => {
  const part = jsonpath.query(json, "$");

  return (
    <div className="GridView">
      <MapType path="$" json={part} />
    </div>
  );
};

export interface Querryble {
  path: string;
}

export default GridView;
