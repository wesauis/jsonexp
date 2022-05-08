import { FC } from "react";
import "./Breadcrumb.scss";
import BreadcrumbItem from "./BreadcrumbItem";
import { usePathContext } from "./PathContext";

interface BreadcrumbProps {}

const Breadcrumb: FC<BreadcrumbProps> = () => {
  const { path: rawPath, vpath: rawVPath } = usePathContext();

  const path = splitPath(rawPath);
  const vpath = splitPath(rawVPath.substring(rawPath.length + 1));

  return (
    <div className="Breadcrumb">
      {path.map((item, index) => (
        <BreadcrumbItem
          key={`${item}#${index}`}
          isLast={path.length - 1 == index && !vpath.length}
          isActive={path.length - 1 == index}
          path={joinPath(path.slice(0, index + 1))}
          item={item}
        />
      ))}
      {vpath.map((item, index) => (
        <BreadcrumbItem
          key={`${item}#${index}`}
          isLast={vpath.length - 1 == index}
          isVirtual
          path={joinPath(vpath.slice(0, index + 1))}
          item={item}
        />
      ))}
    </div>
  );
};

export type PathItem = string;

function splitPath(rawPath: string): PathItem[] {
  if (rawPath.trim() === "") return [];

  // NOTE: maybe tokenize and include some info about what type it is...
  return rawPath.split(".");
}

function joinPath(path: PathItem[]): string {
  return path.join(".");
}

export default Breadcrumb;
