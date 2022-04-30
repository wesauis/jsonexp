import { FC } from "react";
import "./GridScalar.scss";

interface GridScalarProps {
  value: any;
}

const GridScalar: FC<GridScalarProps> = ({ value }) => {
  const typeClass = typeClassOf(value);

  return <span className={typeClass}>{String(value)}</span>;
};

/** JSON "Scalar" Types */
export type TypeClass = "null" | "string" | "number" | "boolean";

function typeClassOf(value: string): TypeClass {
  return value === null ? "null" : (typeof value as TypeClass);
}

export default GridScalar;
