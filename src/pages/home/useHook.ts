import React, { useState, useRef, useEffect } from 'react';
import useFilter from 'customHooks/useFilter';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from 'store';
import { setIsLoading } from 'store/github';
import fetcher from 'utils/fetcher';
import { REQUEST_METHOD } from 'constants/global';

const { GET } = REQUEST_METHOD;
function useHook() {
  const dispatch = useDispatch();
  const { value: check } = useSelector((state:RootState) => state.github);
  const { objQuery, handleChangeFilter } = useFilter();
  const [typeSelected, setTypeSelected] = useState('users');
  const refSearch:any = useRef(null);
  const [keyWord, setKeyWord] = useState(objQuery.keyword || '');
  const handleFetchData = async () => {
    // dispatch(setIsLoading(true));
    // try {
    //   const url = `/users/${objQuery.keyWord || 'a'}`;
    //   const res = await fetcher(url, GET);
    //   console.log(res);
    // } catch (error) {
    //   console.log(error);
    // } finally {
    //   dispatch(setIsLoading(false));
    // }
  };
  useEffect(() => {
    handleFetchData();
  }, [objQuery]);
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setKeyWord(value);
    clearTimeout(refSearch.current);
    refSearch.current = setTimeout(() => {
      handleChangeFilter('keyword', value);
    }, 500);
  };

  return {
    keyWord, onChange, typeSelected, handleChangeType: setTypeSelected,
  };
}

export default useHook;
