import { FC, ReactElement } from "react";
import MapType from "./MapType";

interface GridArrayProps {
  array: any[];
}

function mapItem(item: any, index: number): ReactElement {
  return (
    <tr key={index}>
      <td className="array-item">
        <MapType key={index} json={item} />
      </td>
    </tr>
  );
}

const GridArray: FC<GridArrayProps> = ({ array }) => {
  let classList = "array";

  if (!array.length) classList += " empty";

  return (
    <table className={classList}>
      <tbody>{array.map(mapItem)}</tbody>
    </table>
  );
};

export default GridArray;
