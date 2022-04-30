import { FC } from "react";
import "./Breadcrumb.scss";
import BreadcrumbItem from "./BreadcrumbItem";
import { usePathContext } from "./PathContext";

interface BreadcrumbProps {}

const Breadcrumb: FC<BreadcrumbProps> = () => {
  const { path: rawPath, setPath, vpath } = usePathContext();

  const path = splitPath(rawPath);

  return (
    <div className="Breadcrumb">
      {path.map((item, index) => (
        <BreadcrumbItem
          key={`${item}#${index}`}
          isLast={path.length - 1 == index}
          path={joinPath(path.slice(0, index + 1))}
          item={item}
        />
      ))}
    </div>
  );
};

export type PathItem = string;

function splitPath(rawPath: string): PathItem[] {
  // NOTE: maybe tokenize and include some info about what type it is...
  return rawPath.split(".");
}

function joinPath(path: PathItem[]): string {
  return path.join(".");
}

export default Breadcrumb;
