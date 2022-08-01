import { memo } from 'react';
import Text from 'components/Text';
import notFound from 'assets/images/notFound.png';
import { Container, Img, InfoWrap } from './style';

function NoData() {
  return (
    <Container>
      <Img src={notFound} />
      <InfoWrap role="contentinfo">
        <Text weight="bold" size="lg2xl">Oppss</Text>
        <Text className="sub-title">Data not found</Text>
      </InfoWrap>
    </Container>
  );
}

export default memo(NoData);
