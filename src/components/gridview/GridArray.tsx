import { FC, ReactElement } from "react";
import MapType from "./MapType";

interface GridArrayProps {
  array: any[];
}

function mapItem(item: any, index: number): ReactElement {
  return (
    <tr key={index}>
      <td>
        <MapType key={index} json={item} />
      </td>
    </tr>
  );
}

const GridArray: FC<GridArrayProps> = ({ array }) => {
  return (
    <table className="array">
      <tbody>{array.map(mapItem)}</tbody>
    </table>
  );
};

export default GridArray;
