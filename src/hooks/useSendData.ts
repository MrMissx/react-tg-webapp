import { useCallback, useContext } from "react";
import { TelegramWebAppContext } from "../context";


interface SendDataReturn {
  sendData: (data: string) => void;
}

export function useHapticFeedback(): SendDataReturn {
  const { WebApp } = useContext(TelegramWebAppContext)

  const sendData = useCallback((data: string) => {
    WebApp?.sendData(data)
  }, [WebApp])

  return {sendData}
}
