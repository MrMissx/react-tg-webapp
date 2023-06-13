export interface MainButtonParams {
  /**
   * Current button text. Default to 'CONTINUE'
   */
  text: string
  /**
   * Current button color. Default to `themeParams.button_color`
   */
  color: string
  /**
   * Current button text color.
   */
  textColor: string
  /**
   * 	Shows whether the button is visible.
   */
  isVisible: boolean
  /**
   * Shows whether the button is active.
   */
  isActive: boolean
}

export interface MainButton extends MainButtonParams {
  /**
   * Shows whether the button is displaying a loading indicator.
   */
  readonly isProgressVisible: boolean
  /**
   * A method to set the button text.
   *
   * @param text The text to set.
   */
  setText: (text: string) => MainButton
  /**
   * A method that sets the button press event handler.
   */
  onClick: (callback: () => void) => MainButton
  /**
   * A method that removes the button press event handler.
   */
  offClick: (callback: () => void) => MainButton
  /**
   * A method to make the button visible.
   */
  show: () => MainButton
  /**
   * A method to hide the button.
   */
  hide: () => MainButton
  /**
   * A method to enable the button.
   */
  enable: () => MainButton
  /**
   * A method to disable the button.
   */
  disable: () => MainButton
  /**
   * A method to show a loading indicator on the button.
   *
   * @param leaveActive whether the button should remains enabled.
   */
  showProgress: (leaveActive: boolean) => MainButton
  /**
   * A method to hide the loading indicator.
   */
  hideProgress: () => MainButton
  /**
   * A method to set the button parameters. The params parameter is an object containing one or several fields that need to be changed:
   *
   * @param params Parameters to set.
   */
  setParams: (params: Partial<MainButtonParams>) => MainButton
}
