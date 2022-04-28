import { FC } from "react";

interface GridScalarProps {
  value: any;
}

const GridScalar: FC<GridScalarProps> = ({ value }) => {
  return <span>{String(value)}</span>;
};

export default GridScalar;
