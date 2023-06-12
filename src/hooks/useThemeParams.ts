import { useEffect, useState, useContext, useCallback } from "react";

import { ThemeParams } from "../types";
import { TelegramWebAppContext } from "../context";


export type ColorScheme = 'light' | 'dark' | undefined;

interface ThemeParamsReturn {
  colorScheme: ColorScheme;
  themeParams: Partial<ThemeParams>;
}

export function useThemeParams(): ThemeParamsReturn {
  const { WebApp, isReady } = useContext(TelegramWebAppContext)

  const [colorScheme, setColorScheme] = useState<ColorScheme>(WebApp?.colorScheme);
  const [themeParams, setThemeParams] = useState<Partial<ThemeParams>>(WebApp?.themeParams || {});

  const updateThemeParams = useCallback(() => {
    setColorScheme(WebApp?.colorScheme);
    setThemeParams(WebApp?.themeParams || {});
  }, [WebApp])

  useEffect(() => {
    if (!isReady) return
    updateThemeParams();
    WebApp.onEvent('themeChanged', updateThemeParams);
    return () => {
      WebApp.offEvent('themeChanged', updateThemeParams);
    }
  }, [WebApp, updateThemeParams, isReady])


  return {colorScheme, themeParams};
}
