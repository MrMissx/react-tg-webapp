
import { useCallback, useContext, useEffect } from "react";

import { MainButtonParams } from "../types";
import { TelegramWebAppContext } from "../context";

interface MainButtonProps extends Partial<MainButtonParams> {
  /**
   * Main Button click handler
   */
  onClick?: () => void
  /**
   * Whether to hide progress
   */
  hideProgress?: boolean
  /**
   * Whether to enable the button
   */
  isEnabled?: boolean
  /**
   * Whether to leave progress active
   */
  leaveProgressActive?: boolean
}


/**
 * Telegram WebApp Main Button
 *
 * Button will only appear on the Telegram WebApp window (not in the browser).
 * Main button are rendered on the bottom of the screen / WebApp window
 */
export function MainButton(props: MainButtonProps) {
  const { WebApp } = useContext(TelegramWebAppContext)
  const MainButton = WebApp?.MainButton

  const setMainButtonParam = useCallback((props: Partial<MainButtonParams>) => {
    if(!MainButton) return
    MainButton.setParams(props)
  }, [MainButton])

  useEffect(() => {
    setMainButtonParam({text: props.text || "CONTINUE"})
  }, [setMainButtonParam, props.text])

  useEffect(() => {
    setMainButtonParam({color: props.color || WebApp?.themeParams?.bg_color})
  }, [WebApp, setMainButtonParam, props.color])

  useEffect(() => {
    setMainButtonParam({textColor: props.textColor || WebApp?.themeParams?.text_color})
  }, [WebApp, setMainButtonParam, props.textColor])

  useEffect(() => {
    setMainButtonParam({isVisible: props.isVisible || true})
  }, [WebApp, setMainButtonParam, props.isVisible])

  useEffect(() => {
    setMainButtonParam({isActive: props.isActive || true})
  }, [WebApp, setMainButtonParam, props.isActive])

  useEffect(() => {
    if (!props.onClick) {
      return;
    }

    MainButton?.onClick(props.onClick);
    return () => {
      if (!props.onClick) return
      MainButton?.offClick(props.onClick);
    };
  }, [MainButton, props]);

  useEffect(() => {
    if (props.isEnabled === true) {
      MainButton?.enable();
    } else if (props.isEnabled === false) {
      MainButton?.disable();
    }
  }, [MainButton, props.isEnabled])

  useEffect(() => {
    if (props.leaveProgressActive) MainButton?.showProgress(true);
  }, [MainButton, props.leaveProgressActive])

  useEffect(() => {
    if (props.hideProgress) MainButton?.hideProgress();
  }, [MainButton, props.hideProgress])

  // Render button
  useEffect(() => {
    MainButton?.show();
    return () => {
      MainButton?.hide();
    };
  }, [MainButton]);

  return null
}
