import { FC } from "react";
import GridArray from "./GridArray";
import GridObject from "./GridObject";
import GridScalar from "./GridScalar";

export enum GridType {
  Object,
  Array,
  Scalar,
}

export function mapType(json: any): GridType {
  if (Array.isArray(json)) {
    return GridType.Array;
  }

  if (json != null && typeof json == "object") {
    return GridType.Object;
  }

  return GridType.Scalar;
}

interface MapTypeProps {
  path: string;
  json: any;
}

const MapType: FC<MapTypeProps> = ({ path, json }) => {
  switch (mapType(json)) {
    case GridType.Object:
      return <GridObject path={path} object={json} />;
    case GridType.Array:
      return <GridArray path={path} array={json} />;
    case GridType.Scalar:
      return <GridScalar value={json} />;
    default:
      console.log(new Error("unimplemented: " + JSON.stringify(json)));
      return null;
  }
};

export default MapType;
