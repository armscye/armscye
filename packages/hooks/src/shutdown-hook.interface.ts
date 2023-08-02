/**
 * Interface defining methods to respond to system signals (when application gets
 * shutdown by, e.g., SIGTERM)
 */
export interface ShutdownHook {
  /**
   * Called before connections close.
   * @param signal the system signal
   */
  beforeShutdown(signal?: string): any;

  /**
   * Called after connections close.
   * @param signal the system signal
   */
  onShutdown(signal?: string): any;
}
