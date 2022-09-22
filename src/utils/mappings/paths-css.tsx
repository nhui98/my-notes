import Fundementals from "@components/css/Fundementals";
import Selectors from "@components/css/Selectors";
import SizingSpacing from "@components/css/SizingSpacing";

export const PATH_MAP = {
  fundementals: <Fundementals />,
  selectors: <Selectors />,
  "sizing&spacing": <SizingSpacing />,
} as {
  [key: string]: JSX.Element;
};
