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
  logout: {
    url : '/auth/logout',
    method: Method.DELETE,
  }
};

const userEndpoints : EndpointList = {
  verification: {
    url: '/activation-link',
    method: Method.POST,
  },
}

const forumEndpoints : EndpointList = {
  forumNewest: {
    url:'/forums/newest',
    method: Method.GET
  },
  forumTop: {
    url:'/forums/top',
    method: Method.GET
  },
  forumCreate : {
    url: "/forums/create",
    method: Method.POST
  }
}

export const endpoints: EndpointList = {
  ...authEndpoints,
  ...userEndpoints,
  ...forumEndpoints
};
