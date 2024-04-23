import React from 'react';
import type { MeroThemeProps } from '../types';
import { defaultThemeColors } from './colors';
import { dashedBorders, dottedBorders, solidBorders } from '../utils/borders';


export const defaultTheme: MeroThemeProps = {
  colorScheme: 'light',
  palette: {
    colors: defaultThemeColors,
  },
  borders: {
    solidBorders: solidBorders,
    dashedBorders: dashedBorders,
    dottedBorders: dottedBorders,
  },
  typography: {
    fontFamily: 'Arial, sans-serif',
    fontSize: '16px',
  },
};

