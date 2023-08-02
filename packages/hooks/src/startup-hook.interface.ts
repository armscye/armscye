/**
 * Interface defining method called during the application startup.
 */
export interface StartupHook {
  /**
   * 	Called before listening for connections.
   */
  onStartup(): any;
}
