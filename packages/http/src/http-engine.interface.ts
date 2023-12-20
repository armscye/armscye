export interface HttpEngine {
  getInstance(): any;
  getHttpServer(): any;
  getType(): string;
  listen(port: number | string, callback?: () => void): any;
  listen(port: number | string, hostname: string, callback?: () => void): any;
  initHttpServer(options?: any): void;
  close(): any;
}
