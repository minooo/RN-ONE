import React from "react";
import { createIconSetFromIcoMoon } from "react-native-vector-icons";
import icoMoonConfig from "../static/fonts/fontConfig.json";

const Icon = createIconSetFromIcoMoon(icoMoonConfig);
export default ({ ...rest }) => (
  <Icon {...rest} />
);
