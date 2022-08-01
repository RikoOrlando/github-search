import { memo } from 'react';
import githubLogo from 'assets/images/GitHub-Mark-64px.png';
import Text from 'components/Text';
import { Container, Img, ContainerText } from './style';

function Navbar() {
  return (
    <Container id="navbar">
      <Img src={githubLogo} />
      <ContainerText title="Header">
        <Text weight="bold">Github Searcher</Text>
        <Text color="gray" size="sm">Search users or repositories below</Text>
      </ContainerText>
    </Container>
  );
}

export default memo(Navbar);
