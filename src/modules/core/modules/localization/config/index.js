import { cs } from "translations";
import { Languages } from "../constants";
import csAntd from "antd/es/locale-provider/cs_CZ";

export const languages = Object.values(Languages);

export const intlData = {
  [Languages.CS]: cs,
};

export const antdData = {
  [Languages.CS]: csAntd,
};
