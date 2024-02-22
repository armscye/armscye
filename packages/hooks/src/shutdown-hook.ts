/**
 * Interface defining method to respond to system signals (when application gets
 * shutdown by, e.g., `SIGTERM`).
 */
export interface ShutdownHook {
  /**
   * Called after connections close.
   *
   * @param signal the system signal
   */
  onShutdown(signal?: string): any;
}
