import jsonpath from "jsonpath";
import { FC, useEffect } from "react";
import { usePathContext } from "../path/PathContext";
import "./GridView.scss";
import MapType from "./MapType";

export interface GridViewProps {
  json: any;
}

const GridView: FC<GridViewProps> = ({ json }) => {
  const { path } = usePathContext();

  const parts = jsonpath.query(json, path);
  const activeParts = parts.length == 1 ? parts[0] : parts;

  useEffect(() => {
    console.log("The rendered json is avaliable at window.json!");
    (window as any).json = activeParts;
  }, [activeParts]);

  return (
    <div className="GridView">
      <MapType path={path} json={activeParts} />
    </div>
  );
};

export interface Querryble {
  path: string;
}

export default GridView;
