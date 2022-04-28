import { FC } from "react";
import MapType from "./MapType";

export interface GridViewProps {
  json: any;
}

const GridView: FC<GridViewProps> = ({ json }) => {
  return (
    <div>
      <MapType json={json} />
    </div>
  );
};

export default GridView;
