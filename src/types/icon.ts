
export type IIcon = {
  image_url: string,
  click_url: string,
  more_class?: string,
};

export type IHandleIcon = {
  image_url: string,
  handle: ()=>void,
  more_class?: string,
};
