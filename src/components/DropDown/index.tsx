import {
  memo, useState, useRef, useMemo,
} from 'react';
import Text from 'components/Text';
import iconDown from 'assets/images/down.png';
import useOutsideAlerter from 'customHooks/useOutsideAlerter';
import {
  Container, Img, Wrapper, ContainerOptions, Option,
} from './style';

interface IOption {
  value: string;
  label: string
}
interface IDropDown {
  options: IOption[];
  value: string;
  onChange: (_: string) => void
}
function DropDown({ options, value, onChange }:IDropDown) {
  const ref = useRef(null);
  const [isShow, setIsShow] = useState(false);
  useOutsideAlerter(ref, () => {
    setIsShow(false);
  }, isShow);
  const handleClickDropdown = () => {
    setIsShow(true);
  };
  const selected = useMemo(() => {
    const finded = options.find((el) => el.value === value);
    if (finded) return finded.label;
    return 'Select';
  }, [value, options]);
  const handleClickOption = (opt: IOption) => {
    setIsShow(false);
    onChange(opt.value);
  };
  return (
    <Wrapper ref={ref}>
      <Container onClick={handleClickDropdown}>
        <Text color="gray">
          {selected}
        </Text>
        <Img src={iconDown} />
      </Container>
      {
        isShow && (
        <ContainerOptions>
          {
            options.map((el) => (
              <Option key={el.value} onClick={() => handleClickOption(el)}>
                <Text color="gray">
                  {el.label}
                </Text>
              </Option>
            ))
          }
        </ContainerOptions>
        )
      }
    </Wrapper>
  );
}

export default memo(DropDown);
