import { FC, ReactElement } from "react";
import "./GridArray.scss";
import MapType from "./MapType";

interface GridArrayProps {
  path: string;
  array: any[];
}

function mapItem(path: string, index: number, item: any): ReactElement {
  return (
    <tr key={index}>
      <td className="array-item">
        <MapType key={index} path={`${path}[${index}]`} json={item} />
      </td>
    </tr>
  );
}

const GridArray: FC<GridArrayProps> = ({ path, array }) => {
  let classList = "array";

  if (!array.length) classList += " empty";

  return (
    <table className={classList}>
      <tbody>{array.map((item, index) => mapItem(path, index, item))}</tbody>
    </table>
  );
};

export default GridArray;
