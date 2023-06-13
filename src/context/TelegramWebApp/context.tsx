import { createContext } from "react"

import { WebApp } from "../../types"

type TelegramWebAppContextType = {
  /**
   * Telegram WebApp object
   */
  WebApp: WebApp
  /**
   * True when the `Telegram` object is present on the windoww
   */
  isReady: boolean
}

export const TelegramWebAppContext = createContext<TelegramWebAppContextType>({
  WebApp: {} as WebApp,
  isReady: false,
})
