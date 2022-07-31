import { memo, useState, useRef } from 'react';
import { Text } from 'components';
import iconDown from 'assets/images/down.png';
import useOutsideAlerter from 'customHooks/useOutsideAlerter';
import {
  Container, Img, Wrapper, ContainerOptions, Option,
} from './style';

function DropDown() {
  const ref = useRef(null);
  const [isShow, setIsShow] = useState(false);
  useOutsideAlerter(ref, () => {
    setIsShow(false);
  }, isShow);
  const handleClickDropdown = () => {
    setIsShow(true);
  };
  return (
    <Wrapper ref={ref}>
      <Container onClick={handleClickDropdown}>
        <Text color="gray">
          Users
        </Text>
        <Img src={iconDown} />
      </Container>
      {
        isShow && (
        <ContainerOptions>
          <Option>
            <Text color="gray">
              Users
            </Text>
          </Option>
          <Option>
            <Text color="gray">
              Repositories
            </Text>
          </Option>
        </ContainerOptions>
        )
      }
    </Wrapper>
  );
}

export default memo(DropDown);
