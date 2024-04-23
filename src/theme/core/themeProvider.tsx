"use client";
import React from 'react';
import { defaultTheme } from '../defaultTheme/defaultTheme';
import { MeroThemeContext } from './createContext';
import { MeroThemeProps } from '../types';



const MeroThemeProvider: React.FC<{ theme?: Partial<MeroThemeProps>, children: React.ReactNode }> = ({ theme, children }) => {
    const mergedTheme = { ...defaultTheme, ...theme };
    return <MeroThemeContext.Provider key='MeroUiContextProvider' value={mergedTheme}>{children}</MeroThemeContext.Provider>;
};

export default MeroThemeProvider;