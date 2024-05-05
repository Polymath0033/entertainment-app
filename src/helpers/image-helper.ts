export const getImageURL = (image: string) => {
  if (!image) {
    return;
  }
  return new URL(image, import.meta.url).href;
};
