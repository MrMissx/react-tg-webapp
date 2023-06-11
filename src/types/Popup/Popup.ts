import { PopupButton } from '..'

export interface Popup {
  /**
   * The text to be displayed in the popup title, 0-64 characters.
   */
  title?: string;
  /**
   * The message to be displayed in the body of the popup, 1-256 characters.
   */
  message: string
  /**
   * List of buttons to be displayed in the popup, 1-3 buttons. Set to [{“type”:“close”}] by default.
   */
  buttons?: PopupButton[]
}
