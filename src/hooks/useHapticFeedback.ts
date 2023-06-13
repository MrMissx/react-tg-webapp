import { useCallback, useContext } from "react"

import { ImpactStyle, NotificationType } from "../types"
import { TelegramWebAppContext } from "../context"

interface HapticFeedbackReturn {
  impactAccured: (style: ImpactStyle) => void
  notificationOccurred: (style: NotificationType) => void
  selectionChanged: () => void
}

export function useHapticFeedback(): HapticFeedbackReturn {
  const { WebApp } = useContext(TelegramWebAppContext)

  const impactAccured = useCallback(
    (style: ImpactStyle) => {
      WebApp?.HapticFeedback.impactOccurred(style)
    },
    [WebApp]
  )

  const notificationOccurred = useCallback(
    (style: NotificationType) => {
      WebApp?.HapticFeedback.notificationOccurred(style)
    },
    [WebApp]
  )

  const selectionChanged = useCallback(() => {
    WebApp?.HapticFeedback.selectionChanged()
  }, [WebApp])

  return { impactAccured, notificationOccurred, selectionChanged }
}
