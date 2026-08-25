/**
 * Defines a hook that runs during application startup.
 */
export interface StartupHook {
  /**
   * Called when the application is starting.
   */
  onStartup(): any;
}
