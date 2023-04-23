export enum Method {
  GET,
  POST,
  PUT, 
  DELETE
}

export interface Endpoint {
  url: string;
  method: Method;
}

export interface EndpointList {
  [key: string]: Endpoint;
}