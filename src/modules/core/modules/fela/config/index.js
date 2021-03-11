import { theme } from "styles";
import { isEnvDevelopment } from "constants/index";

import plugins from "./plugins";
import enhancers from "./enhancers";

export const rendererConfig = {
  devMode: isEnvDevelopment,
  enhancers,
  plugins,
  theme,
};

export const fonts = [
  // {
  //     name: '',
  //     files: [],
  //     options: {}
  // }
];
