import { memo } from 'react';
import { Card, Container, Animated } from './style';

const staticData = [1, 2, 3, 4, 5, 6];
function Skeleton() {
  return (
    <Container>
      {
        staticData.map((el) => (
          <Card key={el}>
            <Animated />
          </Card>
        ))
      }
    </Container>
  );
}

export default memo(Skeleton);
