import * as React from "react";
import { defaultTheme } from "../defaultTheme/defaultTheme";
import type { MeroThemeProps } from "../types";

export const MeroThemeContext =
  React.createContext<MeroThemeProps>(defaultTheme);

export const useTheme = () => React.useContext(MeroThemeContext);
