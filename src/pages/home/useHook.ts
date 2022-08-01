import React, {
  useState, useRef, useEffect, useMemo,
} from 'react';
import useFilter from 'customHooks/useFilter';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from 'store';
import {
  setIsLoading, addCache, setItems, setTotalPage,
  setIsApiLimited, resetCache,
} from 'store/github';
import fetcher from 'utils/fetcher';
import { REQUEST_METHOD, perPage } from 'constants/global';

const { GET } = REQUEST_METHOD;
function useHook() {
  const dispatch = useDispatch();
  const { cacheData } = useSelector((state:RootState) => state.github);
  const { objQuery, handleChangeFilter, handleChangePageQuery } = useFilter();
  const [typeSelected, setTypeSelected] = useState(objQuery.type || 'users');
  const refSearch:any = useRef(null);
  const q = useMemo(() => objQuery.keyword || 'a', [objQuery]);
  const type = useMemo(() => objQuery.type || 'users', [objQuery]);
  const page = useMemo(() => objQuery.page || '1', [objQuery]);
  const [keyWord, setKeyWord] = useState(objQuery.keyword || '');
  const handleFetchData = async () => {
    dispatch(setIsLoading(true));
    try {
      const url = `/search/${type}`;
      const { data } = await fetcher(url, GET, { q, page, per_page: perPage });
      const keyCache = `${type}${q}${page}`;
      const totalPage = Math.ceil(data.total_count / perPage);
      const limitedTotalPage = totalPage > 100 ? 100 : totalPage;
      const { items } = data;
      const cacheDataPayload = {
        totalPage: limitedTotalPage,
        items,
      };
      dispatch(addCache({ keyCache, cacheValue: cacheDataPayload }));
      dispatch(setTotalPage(limitedTotalPage));
      dispatch(setItems(items));
      dispatch(setIsApiLimited(false));
    } catch (error:any) {
      if (error.status === 403) {
        dispatch(setIsApiLimited(true));
      }
    } finally {
      dispatch(setIsLoading(false));
    }
  };
  useEffect(() => {
    const keyCache = `${type}${q}${page}`;
    const data = cacheData[keyCache];
    if (data) {
      dispatch(setTotalPage(data.totalPage));
      dispatch(setItems(data.items));
    } else {
      handleFetchData();
    }
  }, [objQuery]);
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setKeyWord(value);
    clearTimeout(refSearch.current);
    refSearch.current = setTimeout(() => {
      handleChangeFilter('keyword', value);
    }, 500);
  };
  const handleChangeType = (typeVal: string) => {
    setTypeSelected(typeVal);
    handleChangeFilter('type', typeVal);
  };
  const handleChangePage = (desPage:string) => {
    handleChangePageQuery('page', desPage);
  };
  const handleTryAgain = () => {
    handleFetchData();
  };
  return {
    keyWord,
    onChange,
    typeSelected,
    handleChangeType,
    page,
    handleChangePage,
    handleTryAgain,
  };
}

export default useHook;
