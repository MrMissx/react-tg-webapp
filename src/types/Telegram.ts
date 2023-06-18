/* eslint-disable @typescript-eslint/no-explicit-any */
import { HapticFeedback, EventType, ThemeParams, MainButton, BackButton } from "."

export interface Telegram {
  /**
   * Telegram WebApp Object
   */
  WebApp: WebApp
  Utils: unknown
  WebView: unknown
}

export interface WebApp {
  /**
   * A string with raw data transferred to the Web App, convenient for validating data.
   * WARNING: Validate data from this field before using it on the bot's server.
   */
  initData: string
  /**
   * An object with input data transferred to the Web App.
   * WARNING: Data from this field should not be trusted. You should only use data from initData on the bot's server and only after it has been validated.
   */
  initDataUnsafe: object
  /**
   * The version of the Bot API available in the user's Telegram app.
   */
  version: string
  /**
   * The name of the platform of the user's Telegram app.
   */
  platform: string
  /**
   * The color scheme currently used in the Telegram app.
   */
  colorScheme: "light" | "dark"
  /**
   * An object containing the current theme settings used in the Telegram app.
   */
  themeParams: ThemeParams
  /**
   * True, if the Web App is expanded to the maximum available height.
   * False, if the Web App occupies part of the screen and can be expanded to the full height using the expand() method.
   */
  isExpanded: boolean
  /**
   * The current height of the visible area of the Web App.
   */
  viewportHeight: number
  /**
   * The height of the visible area of the Web App in its last stable state.
   */
  viewportStableHeight: number
  /**
   * 	Current header color in the #RRGGBB format.
   */
  headerColor: string
  /**
   * Current background color in the #RRGGBB format.
   */
  backgroundColor: string
  /**
   * True, if the confirmation dialog is enabled while the user is trying to close the Web App.
   * False, if the confirmation dialog is disabled.
   */
  isClosingConfirmationEnabled: boolean
  /**
   * An object for controlling the back button which can be displayed in the header of the Web App in the Telegram interface.
   */
  BackButton: BackButton
  /**
   * An object for controlling the main button, which is displayed at the bottom of the Web App in the Telegram interface.
   */
  MainButton: MainButton
  /**
   * An object for controlling haptic feedback.
   */
  HapticFeedback: HapticFeedback
  /**
   * Returns true if the user's app supports a version of the Bot API that is equal to or higher than the version passed as the parameter.
   * @param version
   */
  isVersionAtLeast(version: any): boolean
  /**
   * A method that sets the app header color.
   * @param color
   */
  setHeaderColor(color: any): any
  /**
   * A method that sets the app background color in the #RRGGBB format or you can use keywords.
   *
   * @param color
   */
  setBackgroundColor(color: any): any
  /**
   * A method that enables a confirmation dialog while the user is trying to close the Web App.
   */
  enableClosingConfirmation(): any
  /**
   * A method that disables the confirmation dialog while the user is trying to close the Web App.
   */
  disableClosingConfirmation(): any
  /**
   * A method that sets the app event handler.
   *
   * @param eventType
   * @param eventHandler
   */
  onEvent(eventType: EventType, eventHandler: () => void): any
  /**
   * A method that deletes a previously set event handler.
   *
   * @param eventType
   * @param eventHandler
   */
  offEvent(eventType: EventType, eventHandler: () => void): any
  /**
   * A method used to send data to the bot.
   * When this method is called, a service message is sent to the bot containing
   * the data data of the length up to 4096 bytes,and the Web App is closed.
   * See the field web_app_data in the class Message.
   *
   * @param data
   */
  sendData(data: any): any
  /**
   * A method that inserts the bot's username and the specified inline query in the current chat's input field.
   * Query may be empty, in which case only the bot's username will be inserted.
   * If an optional choose_chat_types parameter was passed, the client prompts the user to choose a specific chat,
   * then opens that chat and inserts the bot's username and the specified inline query in the input field.
   * You can specify which types of chats the user will be able to choose from.
   * It can be one or more of the following types: `users`, `bots`, `groups`, `channels`.
   *
   * @param any
   */
  switchInlineQuery(any: any): any
  /**
   * A method that opens a link in an external browser. The Web App will not be closed.
   *
   * @param any
   */
  openLink(any: any): any
  /**
   * A method that opens a telegram link inside Telegram app. The Web App will be closed.
   *
   * @param url
   */
  openTelegramLink(url: any): any
  /**
   * A method that opens an invoice using the link url. The Web App will receive the event invoiceClosed when the invoice is closed.
   *
   * @param url
   */
  openInvoice(any: any): any
  /**
   * A method that shows a native popup described by the params argument of the type PopupParams.
   * The Web App will receive the event popupClosed when the popup is closed.
   * If an optional callback parameter was passed, the callback
   * function will be called and the field id of the pressed button will be passed as the first argument.
   *
   * @param params
   */
  showPopup(params: any, callback?: (id: string) => void): any
  /**
   * A method that shows message in a simple alert with a 'Close' button.
   * If an optional callback parameter was passed, the callback function will be called when the popup is closed.
   *
   * @param message
   */
  showAlert(message: any): any
  /**
   * A method that shows message in a simple confirmation window with 'OK' and 'Cancel' buttons.
   * If an optional callback parameter was passed, the callback function will be
   * called when the popup is closed and the first argument will be
   * a boolean indicating whether the user pressed the 'OK' button.
   *
   * @param message
   */
  showConfirm(message: any): any
  /**
   * method that shows a native popup for scanning a QR code described by the params argument of the type ScanQrPopupParams.
   * The Web App will receive the event qrTextReceived every time the scanner catches a code with text data.
   * If an optional callback parameter was passed, the callback function will be called
   * and the text from the QR code will be passed as the first argument.
   * Returning true inside this callback function causes the popup to be closed.
   *
   * @param params
   */
  showScanQrPopup(params: any): any
  /**
   * A method that closes the native popup for scanning a QR code opened with the showScanQrPopup method.
   * Run it if you received valid data in the event qrTextReceived.
   */
  closeScanQrPopup(): any
  /**
   * A method that requests text from the clipboard. The Web App will receive the event clipboardTextReceived.
   * If an optional callback parameter was passed, the callback function
   * will be called and the text from the clipboard will be passed as the first argument.
   *
   * @param callback
   */
  readTextFromClipboard(callback: any): any
  /**
   * A method that informs the Telegram app that the Web App is ready to be displayed.
   * It is recommended to call this method as early as possible, as soon as all essential interface elements are loaded. Once this method is called, the loading placeholder is hidden and the Web App is shown.
   * If the method is not called, the placeholder will be hidden only when the page is fully loaded.
   */
  ready(): any
  /**
   * A method that expands the Web App to the maximum available height.
   */
  expand(): any
  /**
   * A method that closes the Web App.
   */
  close(): any
}
