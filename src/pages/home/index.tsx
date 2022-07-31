import Navbar from 'components/Navbar';
import Input from 'components/Input';
import DropDown from 'components/DropDown';
import Card from 'components/Card';
import { listType } from 'constants/global';
import useHook from './useHook';
import {
  Container, Content, WrapperFilter, CardWrapper,
} from './style';

function Home() {
  const {
    keyWord, onChange, typeSelected, handleChangeType,
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
          <Card />
          <Card />
          <Card />
          <Card />
        </CardWrapper>
      </Content>
    </Container>
  );
}

export default Home;
