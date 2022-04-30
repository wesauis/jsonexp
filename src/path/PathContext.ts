import { createContext, useContext, useState } from "react";

export interface PathContextValue {
  path: string;
  setPath(path: string): void;
}

export const defaultPath = "$";

const PathContext = createContext({
  path: defaultPath,
  setPath(_) {},
} as PathContextValue);

export function useNewPathContext(): PathContextValue {
  const [path, setPath] = useState(defaultPath);
  return { path, setPath };
}

export function usePathContext(): PathContextValue {
  return useContext(PathContext);
}

export default PathContext;
