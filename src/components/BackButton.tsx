import { useContext, useEffect } from "react"

import { TelegramWebAppContext } from "../context"

interface BackButtonProps {
  /**
   * Main Button click handler
   */
  onClick?: () => void
}

/**
 * Telegram WebApp Back Button
 *
 * Button will only appear on the Telegram WebApp window (not in the browser).
 * when on mobile, Button will only appear if the WebApp is expanded.
 */
export function BackButton(props: BackButtonProps) {
  const { WebApp } = useContext(TelegramWebAppContext)
  const BackButton = WebApp?.BackButton

  useEffect(() => {
    if (!props.onClick) {
      return
    }

    BackButton?.onClick(props.onClick)
    return () => {
      if (!props.onClick) return
      BackButton?.offClick(props.onClick)
    }
  }, [BackButton, props.onClick])

  // Render button
  useEffect(() => {
    BackButton?.show()
    return () => {
      BackButton?.hide()
    }
  }, [BackButton])

  return null
}
