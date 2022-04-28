import { FC } from "react";

interface GridScalarProps {
  value: any;
}

function typeClassOf(value: string) {
  return value === null ? "null" : typeof value;
}

const GridScalar: FC<GridScalarProps> = ({ value }) => {
  const typeClass = typeClassOf(value);

  return <span className={typeClass}>{String(value)}</span>;
};

export default GridScalar;
