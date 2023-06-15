import { PropsWithChildren, useEffect, useState } from "react"

import { TelegramWebAppContext } from "./context"
import { WebApp as WebAppType } from "../../types"

export function WebAppProvider({ children }: PropsWithChildren): JSX.Element {
  const [WebApp, setWebApp] = useState<WebAppType>({} as WebAppType)
  const [isReady, setIsReady] = useState<boolean>(false)

  useEffect(() => {
    const script = document.createElement("script")
    script.src = "https://telegram.org/js/telegram-web-app.js"
    script.defer = true
    script.onload = () => {
      window.Telegram.WebApp.ready()
      setWebApp(window.Telegram?.WebApp)
      setIsReady(true)
    }
    document.head.appendChild(script)

    return () => {
      document.head.removeChild(script)
    }
  }, [])

  useEffect(() => {
    setWebApp(window.Telegram?.WebApp)
  }, [window?.Telegram?.WebApp])

  return (
    <TelegramWebAppContext.Provider value={{ WebApp, isReady }}>
      {children}
    </TelegramWebAppContext.Provider>
  )
}
