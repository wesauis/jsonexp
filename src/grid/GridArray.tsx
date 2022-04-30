import { FC, ReactElement } from "react";
import "./GridArray.scss";
import MapType from "./MapType";

interface GridArrayProps {
  path: string;
  array: any[];
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

function mapItem(path: string, index: number, item: any): ReactElement {
  return (
    <tr key={index}>
      <td className="item">
        <MapType key={index} path={`${path}[${index}]`} json={item} />
      </td>
    </tr>
  );
}

export default GridArray;
