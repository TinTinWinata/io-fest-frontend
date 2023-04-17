import { EndpointList, Method } from "../types/endpoint";


const authEndpoints: EndpointList = {
  register: {
    url: '/auth/register',
    method: Method.POST,
  },
  login: {
    url: '/auth/login',
    method: Method.POST,
  },
};

const userEndpoints : EndpointList = {
  verification: {
    url: '/activation-link',
    method: Method.POST,
  },
}



export const endpoints: EndpointList = {
  ...authEndpoints,
  ...userEndpoints
};
