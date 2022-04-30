import { FC } from "react";
import { PathItem } from "./Breadcrumb";
import "./BreadcrumbItem.scss";
import PathButton from "./PathButton";

interface BreadcrumbItemProps {
  path: string;
  item: PathItem;
  isLast: boolean;
}

const BreadcrumbItem: FC<BreadcrumbItemProps> = ({ path, item, isLast }) => {
  let classList = "BreadcrumbItem";
  if (isLast) classList += " active";

  return (
    <>
      <span className={classList}>
        <PathButton path={path}>{item}</PathButton>
      </span>
      {!isLast && "»"}
    </>
  );
};

export default BreadcrumbItem;
