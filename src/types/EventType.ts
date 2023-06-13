/**
 * Events Available for Web Apps
 * - `themeChanged`: Occurs whenever theme settings are changed in the user's Telegram app (including switching to night mode).
 * - `mainButtonClicked`: Occurs when the main button is pressed.
 * - `backButtonClicked`: Occurrs when the back button is pressed.
 * - `settingsButtonClicked`: Occurrs when the Settings item in context menu is pressed.
 * - `invoiceClosed`: Occurrs when the opened invoice is closed.
 * - `popupClosed`: Occurrs when the opened popup is closed.
 * - `qrTextReceived`: Occurs when the QR code scanner catches a code with text data.
 * - `clipboardTextReceived`: Occurrs when the readTextFromClipboard method is called.
 *
 */
export type EventType =
  | "themeChanged"
  | "viewportChanged"
  | "mainButtonClicked"
  | "backButtonClicked"
  | "settingsButtonClicked"
  | "invoiceClosed"
  | "popupClosed"
  | "qrTextReceived"
  | "clipboardTextReceived"
