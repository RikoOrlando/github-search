import { memo } from 'react';
import Text from 'components/Text';
import dayjs from 'dayjs';
import {
  Container, Avatar, ContainerOwner, CreatedAt,
} from './style';

interface ICard {
  data: any
}
function Card({ data }:ICard) {
  return (
    <a target="_blank" href={data.html_url} rel="noreferrer">
      <Container>
        <Text weight="bold">{data.name}</Text>
        <ContainerOwner>
          <Text size="sm">Owner: </Text>
          <Avatar src={data.owner?.avatar_url} />
          <Text size="sm" color="gray">{data.owner?.login}</Text>
        </ContainerOwner>
        <ContainerOwner>
          <Text size="sm">Forks:</Text>
          <Text size="sm" weight="bold">{data.forks_count}</Text>
        </ContainerOwner>
        <ContainerOwner>
          <Text size="sm">Watchers:</Text>
          <Text size="sm" weight="bold">{data.watchers_count}</Text>
        </ContainerOwner>
        <ContainerOwner>
          <Text size="sm">Stars:</Text>
          <Text size="sm" weight="bold">{data.stargazers_count}</Text>
        </ContainerOwner>
        <CreatedAt>
          <Text size="sm" color="gray">{dayjs(data.created_at).format('DD MMMM YYYY')}</Text>
        </CreatedAt>
      </Container>
    </a>
  );
}

export default memo(Card);
