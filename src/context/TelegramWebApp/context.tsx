import { createContext } from 'react';

import { WebApp } from '../../types';

type TelegramWebAppContextType = {
  WebApp: WebApp
}

export const TelegramWebAppContext = createContext<TelegramWebAppContextType>({
  WebApp: {} as WebApp,
})

