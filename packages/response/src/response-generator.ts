/**
 * Describes the interface for composing and sending HTTP responses.
 */
export interface ResponseGenerator {
  /**
   * Sends the composed HTTP response.
   *
   * @param response the in-flight response object
   * @param body the response payload
   * @param statusCode a 3-digit HTTP status code
   */
  reply(response: any, body: any, statusCode?: number): any;
}
