import React, {
  useState, useRef, useEffect, useMemo,
} from 'react';
import useFilter from 'customHooks/useFilter';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from 'store';
import {
  setIsLoading, addCache, setItems, setTotalPage,
} from 'store/github';
import fetcher from 'utils/fetcher';
import { REQUEST_METHOD, perPage } from 'constants/global';

const { GET } = REQUEST_METHOD;
function useHook() {
  const dispatch = useDispatch();
  const { cacheData } = useSelector((state:RootState) => state.github);
  const { objQuery, handleChangeFilter } = useFilter();
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
      const keyCache = `${type}${q}${perPage}`;
      const totalPage = Math.ceil(data.total_count / perPage);
      const { items } = data;
      const cacheDataPayload = {
        totalPage,
        items,
      };
      dispatch(addCache({ keyCache, cacheValue: cacheDataPayload }));
      dispatch(setTotalPage(totalPage));
      dispatch(setItems(items));
    } catch (error) {
      console.error(error);
    } finally {
      dispatch(setIsLoading(false));
    }
  };
  useEffect(() => {
    const keyCache = `${type}${q}${perPage}`;
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
  return {
    keyWord, onChange, typeSelected, handleChangeType,
  };
}

export default useHook;
