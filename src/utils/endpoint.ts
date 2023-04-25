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
  updateProfilePicture: {
    url: '/users/update-profile-picture',
    method: Method.PATCH,
  },
  updateProfile: {
    url: '/users/update-profile',
    method: Method.PATCH,
  },
  fetch: {
    url: '/users/fetch',
    method: Method.GET
  }
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
  },
  forumId : {
    url: "/forums/get",
    method: Method.GET,
  }
}

const commentEndpoints : EndpointList = {
  commentCreate : {
    url: '/forum-comments/create',
    method: Method.POST,
  }
} 

export const endpoints: EndpointList = {
  ...authEndpoints,
  ...userEndpoints,
  ...forumEndpoints,
  ...commentEndpoints
};
