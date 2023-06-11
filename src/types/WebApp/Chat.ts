export interface WebAppChat {
  /**
   * A unique identifier for the user or bot.
   */
  id: number;
  /**
   * Title of the chat.
   */
  title: string;
  /**
   * Type of chat.
   */
  type?: 'group' | 'supergroup' | 'channel';
  /**
   * Username of the user or bot.
   */
  username?: string;
  /**
   * URL of the user’s profile photo. The photo can be in .jpeg or .svg formats.
   * Only returned for Web Apps launched from the attachment menu.
   */
  photo_url?: string;
}
