import { useMemo, useContext } from "react";
import { TelegramWebAppContext } from "../context";


interface SendDataReturn {
  version: string
  isExpanded: boolean
  viewportHeight: number
  viewportStableHeight: number
  isClosingConfirmationEnabled: boolean
}

export function useMetadata(): SendDataReturn {
  const { WebApp } = useContext(TelegramWebAppContext)

  const version = useMemo(() => WebApp?.version, [WebApp])

  const isExpanded = useMemo(() => WebApp?.isExpanded, [WebApp])

  const viewportHeight = useMemo(() => WebApp?.viewportHeight, [WebApp])

  const viewportStableHeight = useMemo(() => WebApp?.viewportStableHeight, [WebApp])

  const isClosingConfirmationEnabled = useMemo(() => WebApp?.isClosingConfirmationEnabled, [WebApp])

  return { version, isExpanded, viewportHeight, viewportStableHeight, isClosingConfirmationEnabled}
}
