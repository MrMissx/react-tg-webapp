export interface BackButton {
  /**
   * Shows whether the button is visible. Set to false by default.
   */
  isVisible: boolean
  /**
   * A method that sets the button press event handler.
   * An alias for `Telegram.WebApp.onEvent('backButtonClicked', callback)`
   *
   * @param callback
   */
  onClick: (callback: () => void) => BackButton
  /**
   * A method that removes the button press event handler.
   * An alias for `Telegram.WebApp.offEvent('backButtonClicked', callback)`
   *
   * @param callback
   */
  offClick: (callback: () => void) => BackButton
  /**
   * A method to make the button active and visible.
   */
  show: () => BackButton
  /**
   * A method to hide the button.
   */
  hide: () => BackButton
}
