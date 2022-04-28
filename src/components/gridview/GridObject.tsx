import { FC, ReactElement } from "react";
import MapType, { GridType, mapType } from "./MapType";

interface GridObjectProps {
  object: Record<string, any>;
}

function mapEntry([key, value]: [string, any]): ReactElement {
  if (mapType(value) == GridType.Scalar) {
    return (
      <tr key={key}>
        <td className="key">{key}</td>
        <td className="value">
          <MapType json={value} />
        </td>
      </tr>
    );
  }

  return (
    <tr key={key}>
      <td className="object" colSpan={2}>
        {key}
        <MapType json={value} />
      </td>
    </tr>
  );
}

const GridObject: FC<GridObjectProps> = ({ object }) => {
  return (
    <table>
      <tbody>{Object.entries(object).map(mapEntry)}</tbody>
    </table>
  );
};

export default GridObject;