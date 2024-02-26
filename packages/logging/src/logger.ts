/**
 * Describes a common interface for logging.
 */
export interface Logger {
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

  /**
   * Log a message at the CRITICAL level.
   *
   * @param msg the message to be logged
   * @param args an array of arguments
   */
  critical(msg: any, ...args: unknown[]): any;

  /**
   * Return a named logger.
   *
   * @param name the name of the logger
   */
  getLogger(name: string): this;
}
