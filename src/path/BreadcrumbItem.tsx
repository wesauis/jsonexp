import { FC } from "react";
import { PathItem } from "./Breadcrumb";
import "./BreadcrumbItem.scss";
import PathButton from "./PathButton";

interface BreadcrumbItemProps {
  path: string;
  item: PathItem;
  isLast?: boolean;
  isActive?: boolean;
  isVirtual?: boolean;
}

const BreadcrumbItem: FC<BreadcrumbItemProps> = ({
  path,
  item,
  isLast,
  isActive,
  isVirtual,
}) => {
  let classList = "BreadcrumbItem";
  if (isActive) classList += " active";
  if (isVirtual) classList += " virtual";

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
