const cache: Record<number, PhotoPlaceHolder.PhotoResponse[]> = {};
export const storeInCache = (
  index: number,
  entry: PhotoPlaceHolder.PhotoResponse[]
) => {
  cache[index] = entry;
  console.log(cache);
};
// TODO If error call the request again from saga
export const getFromCache = (index: number) => cache[index];
