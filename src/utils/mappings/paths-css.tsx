import Fundementals from "@components/css/Fundementals";
import Selectors from "@components/css/Selectors";

export const PATH_MAP = {
  fundementals: <Fundementals />,
  selectors: <Selectors />,
} as {
  [key: string]: JSX.Element;
};
