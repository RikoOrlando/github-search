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

  const handleChangePageQuery = (field:string, value:string) => {
    const currentParams:any = { ...objQuery, [field]: value };
    const query = transformObjtoQuery(currentParams);
    navigate(query);
  };
  const handleChangeFilter = (field:string, value:string) => {
    const currentParams:any = { ...objQuery, [field]: value };
    delete currentParams.page;
    const query = transformObjtoQuery(currentParams);
    navigate(query);
  };
  return {
    objQuery,
    handleChangeFilter,
    handleChangePageQuery,
  };
}

export default useFilter;
