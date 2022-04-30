import { FC } from "react";
import "./PathButton.scss";
import { usePathContext } from "./PathContext";

interface PathButtonProps {
  path: string;
  children?: React.ReactNode;
}

const PathButton: FC<PathButtonProps> = ({ path, children }) => {
  const { setPath, setVPath } = usePathContext();

  function handleClick() {
    setPath(path);
  }

  function handleHover() {
    setVPath(path);
  }

  return (
    <a
      href={`#${path}`}
      className="PathButton"
      onClick={handleClick}
      onMouseEnter={handleHover}
    >
      {children}
    </a>
  );
};

export default PathButton;
