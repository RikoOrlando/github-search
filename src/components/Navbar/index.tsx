import { memo } from 'react';
import githubLogo from 'assets/images/GitHub-Mark-64px.png';
import { Text } from 'components';
import { Container, Img, ContainerText } from './style';

function Navbar() {
  return (
    <Container>
      <Img src={githubLogo} />
      <ContainerText>
        <Text weight="bold">Github Searcher</Text>
        <Text color="gray" size="sm">Search users or repositories below</Text>
      </ContainerText>
    </Container>
  );
}

export default memo(Navbar);
