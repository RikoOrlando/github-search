import { useMemo } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { transformQuerytoObj, transformObjtoQuery } from 'utils/helpers/general';

function useFilter() {
  const location = useLocation();
  const navigate = useNavigate();
  const objQuery = useMemo(
    () => transformQuerytoObj(location.search),

    [location.search],
  );

  // const handleChangePage = (type) => {
  //   const lastQuery = transformQuerytoObj(location.search);
  //   if (lastQuery.pageIndex) {
  //     if (type === 'next') {
  //       lastQuery.pageIndex = Number(lastQuery.pageIndex) + 1;
  //     } else {
  //       lastQuery.pageIndex = Number(lastQuery.pageIndex) - 1;
  //     }
  //   } else {
  //     lastQuery.pageIndex = 1;
  //   }
  //   const query = transformObjtoQuery(lastQuery);
  //   history.replace(`${query}${location.hash}`);
  // };
  const handleChangeFilter = (field:string, value:string) => {
    const currentParams = { ...objQuery, [field]: value };
    const query = transformObjtoQuery(currentParams);
    navigate(query);
  };
  return {
    objQuery,
    handleChangeFilter,
  };
}

export default useFilter;
