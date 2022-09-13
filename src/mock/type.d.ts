export interface MockRequest {
  url: string;
  type: string;
  data?: any;
  params?: any;
  response(option?: any): Record<string, unknown>;
}
