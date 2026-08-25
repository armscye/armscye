/**
 * Defines a hook that runs when the application is shutting down.
 */
export interface ShutdownHook {
  /**
   * Called during application shutdown.
   *
   * @param signal The system signal that triggered the shutdown, if available.
   */
  onShutdown(signal?: string): any;
}
