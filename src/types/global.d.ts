import { Telegram } from "./Telegram"

export {}

declare global {
  interface Window {
    /**
     * Telegram Object
     */
    Telegram: Telegram
  }
}
