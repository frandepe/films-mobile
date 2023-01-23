import {createContext, useState} from 'react';

interface ContextProps {
  colors: ImageColors;
  prevColors: ImageColors;
  setMainColors: (colores: ImageColors) => void;
  setPrevMainColors: (colores: ImageColors) => void;
}

export const GradientContext = createContext({} as ContextProps);

import React, {FC, ReactNode} from 'react';

interface ImageColors {
  primary: string;
  secondary: string;
}
interface Props {
  children?: ReactNode | undefined;
}

export const GradientProvider: FC<Props> = ({children}) => {
  const [colors, setColors] = useState<ImageColors>({
    primary: 'transparent',
    secondary: 'transparent',
  });
  const [prevColors, setPrevColors] = useState<ImageColors>({
    primary: 'transparent',
    secondary: 'transparent',
  });

  const setMainColors = (colores: ImageColors) => {
    setColors(colores);
  };
  const setPrevMainColors = (colores: ImageColors) => {
    setColors(colores);
  };

  return (
    <GradientContext.Provider
      value={{colors, prevColors, setMainColors, setPrevMainColors}}>
      {children}
    </GradientContext.Provider>
  );
};
