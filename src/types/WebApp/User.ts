export interface WebAppUser {
  /**
   * A unique identifier for the user or bot.
   */
  id: number
  /**
   * True, if this user is a bot. Returns in the receiver field only.
   */
  is_bot?: boolean
  /**
   * First name of the user or bot.
   */
  first_name: string
  /**
   * Last name of the user or bot.
   */
  last_name?: string
  /**
   * Username of the user or bot.
   */
  username?: string
  /**
   * IETF language tag of the user's language. Returns in user field only.
   */
  language_code?: string
  /**
   * True, if this user is a Telegram Premium user
   */
  is_premium?: boolean
  /**
   * URL of the user’s profile photo. The photo can be in .jpeg or .svg formats.
   * Only returned for Web Apps launched from the attachment menu.
   */
  photo_url?: string
}
