export interface IForumAttachment {
  forumId: string;
  path: string;
  type: string;
}

export const FORUM_ATTACHMENT_TYPE = {
  video: 'Video',
  image: 'Image',
};
