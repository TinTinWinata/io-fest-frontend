export enum Method {
  GET,
  POST,
}

export interface Endpoint {
  url: string;
  method: Method;
}

export interface EndpointList {
  [key: string]: Endpoint;
}