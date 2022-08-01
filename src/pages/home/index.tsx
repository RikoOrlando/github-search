import Navbar from 'components/Navbar';
import Input from 'components/Input';
import DropDown from 'components/DropDown';
import { useSelector } from 'react-redux';
import { listType } from 'constants/global';
import { RootState } from 'store';
import Pagination from 'components/Pagination';
import ItemList from './itemList';
import useHook from './useHook';
import {
  Container, Content, WrapperFilter, CardWrapper,
  PaginationWrapper,
} from './style';

function Home() {
  const {
    totalPage, isApiLimited, items,
  } = useSelector((state: RootState) => state.github);
  const {
    keyWord, onChange, typeSelected, handleChangeType,
    page,
    handleChangePage,
    handleTryAgain,
  } = useHook();
  return (
    <Container>
      <Content>
        <Navbar />
        <WrapperFilter>
          <Input value={keyWord} onChange={onChange} placeholder="Typing to search users or repositories" />
          <DropDown onChange={handleChangeType} value={typeSelected} options={listType} />
        </WrapperFilter>
        <CardWrapper>
          <ItemList handleTryAgain={handleTryAgain} typeSelected={typeSelected} />
        </CardWrapper>
        {
          !isApiLimited && Boolean(items.length) && (
          <PaginationWrapper>
            <Pagination activePage={page} totalPage={totalPage} onChange={handleChangePage} />
          </PaginationWrapper>
          )
        }
      </Content>
    </Container>
  );
}

export default Home;
