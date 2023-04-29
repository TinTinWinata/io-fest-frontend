import { EndpointList, Method } from '../types/endpoint';

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
    url: '/auth/logout',
    method: Method.DELETE,
  },
  googleLogin: {
    url: '/auth/login-google-token',
    method: Method.POST,
  },
  token: {
    url: '/auth/token',
    method: Method.GET,
  },
};

const userEndpoints: EndpointList = {
  verification: {
    url: '/activation-links/activate',
    method: Method.PATCH,
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
    method: Method.GET,
  },
  adminPage: {
    url: '/users/admin-page',
    method: Method.GET,
  },
};

const forumEndpoints: EndpointList = {
  forumNewest: {
    url: '/forums/newest',
    method: Method.GET,
  },
  forumTop: {
    url: '/forums/top',
    method: Method.GET,
  },
  forumCreate: {
    url: '/forums/create',
    method: Method.POST,
  },
  forumId: {
    url: '/forums/get',
    method: Method.GET,
  },
  forumDelete: {
    url: '/forums/delete',
    method: Method.DELETE,
  },
  forumSeen: {
    url: '/forums/seen',
    method: Method.PATCH,
  },
};

const commentEndpoints: EndpointList = {
  commentCreate: {
    url: '/forum-comments/create',
    method: Method.POST,
  },
};

const aiEndpoints: EndpointList = {
  diabetics: {
    url: '/predict',
    method: Method.POST,
  },
};

export const endpoints: EndpointList = {
  ...aiEndpoints,
  ...authEndpoints,
  ...userEndpoints,
  ...forumEndpoints,
  ...commentEndpoints,
};
