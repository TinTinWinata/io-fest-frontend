export enum Method {
  GET,
  POST,
  PUT, 
  DELETE,
  PATCH
}

export interface Endpoint {
  url: string;
  method: Method;
}

export interface EndpointList {
  [key: string]: Endpoint;
}
