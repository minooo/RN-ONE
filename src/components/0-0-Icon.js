// 参考文档 https://github.com/oblador/react-native-vector-icons#icon-component

import React from "react";
import { createIconSetFromIcoMoon } from "react-native-vector-icons";
import icoMoonConfig from "../static/fonts/fontConfig.json";

export default createIconSetFromIcoMoon(icoMoonConfig);
