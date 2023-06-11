import { useEffect, useState, useContext } from "react";

import { ThemeParams } from "../types";
import { TelegramWebAppContext } from "../context";


export type ColorScheme = 'light' | 'dark' | undefined;

interface ThemeParamsReturn {
  colorScheme: ColorScheme;
  themeParams: Partial<ThemeParams>;
}

export function useThemeParams(): ThemeParamsReturn {
  const { WebApp } = useContext(TelegramWebAppContext)

  const [colorScheme, setColorScheme] = useState<ColorScheme>(WebApp?.colorScheme);
  const [themeParams, setThemeParams] = useState<Partial<ThemeParams>>(WebApp?.themeParams || {});

  useEffect(() => {
    const eventHandler = () => {
      setColorScheme(WebApp?.colorScheme);
      setThemeParams(WebApp?.themeParams || {});
    };

    WebApp?.onEvent('themeChanged', eventHandler);

    return () => {
      WebApp?.offEvent('themeChanged', eventHandler);
    }
  }, [WebApp])


  return {colorScheme, themeParams};
}
