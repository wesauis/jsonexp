import { FC } from "react";
import "./GridScalar.scss";

interface GridScalarProps {
  value: any;
}

function typeClassOf(value: string) {
  return value === null ? "null" : typeof value;
}

const GridScalar: FC<GridScalarProps> = ({ value }) => {
  const typeClass = "GridScalar " + typeClassOf(value);

  return <span className={typeClass}>{String(value)}</span>;
};

export default GridScalar;
