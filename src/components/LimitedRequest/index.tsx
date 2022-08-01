import { memo } from 'react';
import limitedIllustration from 'assets/images/limit.png';
import Text from 'components/Text';
import Button from 'components/Button';
import { Container, Img, InfoWrap } from './style';

interface ILimitedRequest {
  handleTryAgain: () => void
}
function LimitedRequest({ handleTryAgain }: ILimitedRequest) {
  return (
    <Container>
      <Img src={limitedIllustration} />
      <InfoWrap>
        <Text weight="bold" size="lg2xl">Oppss</Text>
        <Text className="sub-title">Sorry API rate limit, Please Try Again Later</Text>
        <Button onClick={handleTryAgain}>Try Again</Button>
      </InfoWrap>
    </Container>
  );
}

export default memo(LimitedRequest);
