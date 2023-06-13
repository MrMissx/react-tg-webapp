export type ImpactStyle = "light" | "medium" | "heavy" | "rigid" | "soft"
export type NotificationType = "success" | "warning" | "error"

export interface HapticFeedback {
  /**
   * A method tells that an impact occurred. The Telegram app may play the appropriate haptics based on style value passed.
   *
   * @param style
   */
  impactOccurred(style: ImpactStyle): void
  /**
   * A method tells that a task or action has succeeded, failed, or produced a warning.
   *
   * @param type
   */
  notificationOccurred(type: NotificationType): void
  /**
   * A method tells that the user has changed a selection. The Telegram app may play the appropriate haptics.
   */
  selectionChanged(): void
}
