import { useContext, useCallback } from "react"

import { TelegramWebAppContext } from "../context"

interface PopupButton {
  /**
   * Identifier of the button, 0-64 characters. Set to empty string by default.
   * If the button is pressed, its id is returned in the callPopup and the popupClosed event.
   */
  id?: string
  /**
   * Type of the button. Set to default by default.
   *
   * - `default` - a button with the default style
   * - `ok` - a button with the localized text "OK"
   * - `close`, a button with the localized text "Close"
   * - `cancel`, a button with the localized text "Cancel",
   * - `destructive`, a button with a style that indicates a destructive action (e.g. "Remove", "Delete", etc.).
   */
  type?: "default" | "ok" | "close" | "cancel" | "destructive"
  /**
   * The text to be displayed on the button, 0-64 characters.
   * Required if type is `default` or `destructive`. Irrelevant for other types.
   */
  text?: string
}

interface PopupParams {
  /**
   * The text to be displayed in the popup title, 0-64 characters.
   */
  title?: string
  /**
   * The message to be displayed in the body of the popup, 1-256 characters.
   */
  message: string
  /**
   *  List of buttons to be displayed in the popup, 1-3 buttons. Set to `[{'type':' close'}]` by default.
   */
  buttons: PopupButton[]
}

interface PopupParamsReturn {
  showPopup: (params: PopupParams) => Promise<string>
}

export function usePopup(): PopupParamsReturn {
  const { WebApp, isReady } = useContext(TelegramWebAppContext)

  const showPopup = useCallback(
    (props: PopupParams) => {
      return new Promise<string>((resolve, reject) => {
        if (!isReady) return reject("WebApp is not ready")
        try {
          WebApp.showPopup(props, (id: string) => {
            resolve(id)
          })
        } catch (error) {
          reject(error)
        }
      })
    },
    [isReady]
  )

  return { showPopup }
}
