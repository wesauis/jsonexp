import { FC, ReactElement } from "react";
import "./GridObject.scss";
import MapType, { GridType, mapType } from "./MapType";

interface GridObjectProps {
  path: string;
  object: Record<string, any>;
}

function mapEntry(path: string, key: string, value: number): ReactElement {
  path += `.${key}`;

  if (mapType(value) === GridType.Scalar) {
    return (
      <tr key={key} className="GridObject">
        <td className="key">
          <a href={`#${path}`}>
            <span className="key-text">{key}</span>
          </a>
        </td>
        <td className="value">
          <MapType path={path} json={value} />
        </td>
      </tr>
    );
  }

  const isArray = Array.isArray(value);
  const length = isArray ? value.length : Object.keys(value).length;

  const symbol = isArray ? `[${length}]` : `{${length}}`;

  return (
    <tr key={key} className="GridObject">
      <td className="object" colSpan={2}>
        <a href={`#${path}`}>
          <span className="key-text">{key}</span>
          <span className="length">{symbol}</span>
        </a>
        <MapType path={path} json={value} />
      </td>
    </tr>
  );
}

const GridObject: FC<GridObjectProps> = ({ path, object }) => {
  return (
    <table>
      <tbody>
        {Object.entries(object).map(([key, value]) =>
          mapEntry(path, key, value)
        )}
      </tbody>
    </table>
  );
};

export default GridObject;
