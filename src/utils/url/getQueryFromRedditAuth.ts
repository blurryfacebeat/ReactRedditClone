export const getQueryFromRedditAuth = (urlHash: string) => {
  const paramsMap = new Map();

  const paramsArray = urlHash.replaceAll('#', '').split('&');

  // @ts-ignore
  paramsArray.forEach((item) => paramsMap.set(...item.split('=')));

  return paramsMap;
};
