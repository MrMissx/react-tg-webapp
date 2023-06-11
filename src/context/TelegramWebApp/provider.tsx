import { PropsWithChildren, useEffect, useState } from "react"

import { TelegramWebAppContext } from "./context"


export function WebAppProvider({children}: PropsWithChildren): JSX.Element {
  const [WebApp, setWebApp] = useState(window.Telegram?.WebApp)
  useEffect(() => {
    const script = document.createElement('script')
    script.src = 'https://telegram.org/js/telegram-web-app.js'
    document.head.appendChild(script)
    script.addEventListener('load', () => {
      window.Telegram.WebApp.ready()
      setWebApp(window.Telegram.WebApp)
    })

    return () => {
      document.head.removeChild(script)
    }
  }, [])

  // ensure Telegram object is up to date
  useEffect(() => {
    setWebApp(window.Telegram?.WebApp)
  }, [window.Telegram?.WebApp])

  return (
    <TelegramWebAppContext.Provider value={{WebApp}}>
      {children}
    </TelegramWebAppContext.Provider>
  );
}
