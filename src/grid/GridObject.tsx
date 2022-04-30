import { FC, ReactElement } from "react";
import "./GridObject.scss";
import GridScalar from "./GridScalar";
import { Querryble } from "./GridView";
import MapType, { GridType, mapType } from "./MapType";

interface GridObjectProps extends Querryble {
  object: Record<string, any>;
}

const GridObject: FC<GridObjectProps> = ({ path, object }) => {
  return (
    <table className="object">
      <tbody>
        {Object.entries(object).map(([key, value]) =>
          mapEntry(path, key, value)
        )}
      </tbody>
    </table>
  );
};

function mapEntry(path: string, key: string, value: any): ReactElement {
  path += `.${key}`;

  if (mapType(value) === GridType.Scalar) {
    return renderScalar(path, key, value);
  }

  return renderObject(path, key, value);
}

function renderScalar(
  path: string,
  key: string,
  value: null | number | string | boolean
): ReactElement {
  return (
    <tr key={key}>
      <td>
        <a href={`#${path}`}>
          <span className="key-text">{key}</span>
        </a>
      </td>
      <td>
        <GridScalar value={value} />
      </td>
    </tr>
  );
}

function renderObject(path: string, key: string, value: [] | {}): ReactElement {
  const isArray = Array.isArray(value);
  const length = isArray ? value.length : Object.keys(value).length;

  return (
    <tr key={key}>
      <td className="object-value" colSpan={2}>
        <a href={`#${path}`}>
          <span className="key-text">{key}</span>
          <span className="length">
            {isArray ? `[${length}]` : `{${length}}`}
          </span>
        </a>
        <MapType path={path} json={value} />
      </td>
    </tr>
  );
}

export default GridObject;
