import { memo } from 'react';
import Text from 'components/Text';
import { Container, Avatar, WrapperInfo } from './style';

interface ICard {
  data: any
}
function Card({ data }:ICard) {
  return (
    <a target="_blank" href={data.html_url} rel="noreferrer">
      <Container>
        <WrapperInfo>
          <Avatar src={data.avatar_url} />
          <div>
            <Text weight="bold">{data.login}</Text>
            <Text size="sm">
              Score:
              {' '}
              {data.score}
            </Text>
          </div>
        </WrapperInfo>
      </Container>
    </a>
  );
}

export default memo(Card);
