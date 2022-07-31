import Navbar from 'components/Navbar';
import Input from 'components/Input';
import DropDown from 'components/DropDown';
import { useSelector } from 'react-redux';
import CardUser from 'components/CardUser';
import CardRepository from 'components/CardRepository';
import { listType } from 'constants/global';
import Skeleton from 'components/Skeleton';
import { RootState } from 'store';
import Pagination from 'components/Pagination';
import useHook from './useHook';
import {
  Container, Content, WrapperFilter, CardWrapper,
  PaginationWrapper,
} from './style';

function Home() {
  const { items, isLoading, totalPage } = useSelector((state: RootState) => state.github);
  const {
    keyWord, onChange, typeSelected, handleChangeType,
    page,
    handleChangePage,
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
          {
            isLoading ? (
              <Skeleton />
            ) : (
              items.map((el:any) => (
                typeSelected === 'users' ? <CardUser data={el} key={el.id} /> : <CardRepository data={el} key={el.id} />
              ))
            )
          }
        </CardWrapper>
        <PaginationWrapper>
          <Pagination activePage={page} totalPage={totalPage} onChange={handleChangePage} />
        </PaginationWrapper>
      </Content>
    </Container>
  );
}

export default Home;
