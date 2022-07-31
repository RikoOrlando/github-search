import { Navbar, Input, DropDown } from 'components';
import { Container, Content, WrapperFilter } from './style';

function Home() {
  return (
    <Container>
      <Content>
        <Navbar />
        <WrapperFilter>
          <Input placeholder="Typing to search users or repositories" />
          <DropDown />
        </WrapperFilter>
      </Content>
    </Container>
  );
}

export default Home;
