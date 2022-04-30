import { FC } from "react";
import "./Breadcrumb.scss";
import { usePathContext } from "./PathContext";

interface BreadcrumbProps {}

// »
const Breadcrumb: FC<BreadcrumbProps> = () => {
  const { path, setPath, vpath } = usePathContext();

  return (
    <div className="Breadcrumb">{JSON.stringify({ path, vpath }, null, 2)}</div>
  );
};

export default Breadcrumb;
