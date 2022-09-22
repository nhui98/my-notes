import Fundementals from "@components/css/Fundementals";
import Selectors from "@components/css/Selectors";
import Typography from "@components/css/Typography";

export const PATH_MAP = {
  fundementals: <Fundementals />,
  selectors: <Selectors />,
  typography: <Typography />,
} as {
  [key: string]: JSX.Element;
};
