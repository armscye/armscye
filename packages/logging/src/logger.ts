/**
 * Describes a common interface for logging.
 */
export interface Logger {
  /**
   * Log a message at the TRACE level.
   *
   * @param msg the message to be logged
   * @param args an array of arguments
   */
  trace(msg: any, ...args: unknown[]): any;

  /**
   * Log a message at the DEBUG level.
   *
   * @param msg the message to be logged
   * @param args an array of arguments
   */
  debug(msg: any, ...args: unknown[]): any;

  /**
   * Log a message at the INFO level.
   *
   * @param msg the message to be logged.
   * @param args an array of arguments
   */
  info(msg: any, ...args: unknown[]): any;

  /**
   * Log a message at the WARN level.
   *
   * @param msg the message to be logged
   * @param args an array of arguments
   */
  warn(msg: any, ...args: unknown[]): any;

  /**
   * Log a message at the ERROR level.
   *
   * @param msg the message to be logged
   * @param args an array of arguments
   */
  error(msg: any, ...args: unknown[]): any;
}
