
import { useContext, useEffect } from "react";

import { TelegramWebAppContext } from "../context";

interface BackButtonProps {
  /**
   * Main Button click handler
   */
  onClick?: () => void
}

export function BackButton(props: BackButtonProps) {
  const { WebApp } = useContext(TelegramWebAppContext)
  const BackButton = WebApp?.BackButton


  useEffect(() => {
    if (!props.onClick) {
      return;
    }

    BackButton?.onClick(props.onClick);
    return () => {
      if (!props.onClick) return
      BackButton?.offClick(props.onClick);
    };
  }, [BackButton, props.onClick]);

  // Render button
  useEffect(() => {
    BackButton?.show();
    return () => {
      BackButton?.hide();
    };
  }, [BackButton]);

  return null
}
