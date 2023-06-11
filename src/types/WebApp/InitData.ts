import { WebAppUser } from './User';
import { WebAppChat } from './Chat';

export interface WebAppInitData {
  /**
   * A unique identifier for the Web App session,
   * required for sending messages via the `answerWebAppQuery` method.
   */
  query_id?: string;
  /**
   * An object containing data about the current user.
   */
  user?: WebAppUser;
  /**
   * An object containing data about the chat partner of the current user in the chat
   * where the bot was launched via the attachment menu.
   * Returned only for private chats and only for Web Apps launched via the attachment menu.
   */
  receiver?: WebAppUser;
  /**
   * An object containing data about the chat
   * where the bot was launchedvia the attachment menu.
   * Returned for supergroups, channels and group chats – only for Web Apps launched via the attachment menu.
   */
  chat?: WebAppChat;
  /**
   * Type of the chat from which the Web App was opened.
   * Can be either “sender” for a private chat with the user opening the link,
   * “private”, “group”, “supergroup”, or “channel”.
   * Returned only for Web Apps launched from direct links.
   */
  chat_type?: string;
  /**
   * Global identifier, uniquely corresponding to the chat
   * from which the Web App was opened.
   * Returned only for Web Apps launched from a direct link.
   */
  chat_instance?: string;
  /**
   * The value of the startattach parameter, passed via link.
   * Only returned for Web Apps when launched from the attachment menu via link.
   */
  start_param?: string;
  /**
   * Time in seconds, after which a message can be sent via the `answerWebAppQuery` method.
   */
  can_send_after?: number;
  /**
   * Unix time when the form was opened.
   */
  auth_date: number;
  /**
   * A hash of all passed parameters, which the bot server can use to check their validity.
   */
  hash: string
}
