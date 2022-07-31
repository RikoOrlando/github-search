export const transformQuerytoObj = (query:string) => {
  if (!query) return {};
  const search = query.split('?')[1];
  const listQuery = search.split('&');
  const queryObj:any = {};
  listQuery.forEach((el) => {
    if (el.split('=')[1]) {
      const objKey = el.split('=')[0];
      const objValue = el.split('=')[1];
      queryObj[objKey] = objValue.replace('%20', ' ');
    }
  });
  return queryObj;
};
interface ItransformObjtoQuery {
  [key: string|number]: string
}
export const transformObjtoQuery = (obj:ItransformObjtoQuery) => {
  let result = '?';
  for (const proper in obj) {
    result += `${proper}=${obj[proper]}&`;
  }
  return result;
};
