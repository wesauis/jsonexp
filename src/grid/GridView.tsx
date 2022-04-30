import jsonpath from "jsonpath";
import { FC } from "react";
import { usePathContext } from "../path/PathContext";
import "./GridView.scss";
import MapType from "./MapType";

export interface GridViewProps {
  json: any;
}

const GridView: FC<GridViewProps> = ({ json }) => {
  const { path } = usePathContext();

  const part = jsonpath.query(json, path);

  return (
    <div className="GridView">
      <MapType path={path} json={part} />
    </div>
  );
};

export interface Querryble {
  path: string;
}

export default GridView;
