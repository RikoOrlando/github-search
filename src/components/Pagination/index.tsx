import { memo, useMemo } from 'react';
import Text from 'components/Text';
import styled from 'styled-components';

interface IPagination {
  onChange: (page: string) => void
  totalPage: number;
  activePage: string;
}
function Pagination({ onChange, activePage, totalPage }:IPagination) {
  const listShowPage = useMemo(() => {
    const NumActivePage = Number(activePage);
    const result = [
      {
        label: '1',
        value: '1',
      },
    ];
    if (NumActivePage < 4) {
      const maxLoop = totalPage > 5 ? 5 : totalPage;
      for (let i = 2; i < maxLoop; i++) {
        const el = i;
        result.push({
          label: `${el}`,
          value: `${el}`,
        });
      }
      if (totalPage > 5) {
        result.push({
          label: '...',
          value: `${maxLoop}`,
        });
      }
    } else if (NumActivePage > totalPage - 4) {
      const startLoop = totalPage - 3;
      result.push({
        label: '...',
        value: `${startLoop - 1}`,
      });
      for (let i = startLoop; i < totalPage; i++) {
        const el = i;
        result.push({
          label: `${el}`,
          value: `${el}`,
        });
      }
    } else {
      const start = NumActivePage - 2;
      const end = start + 4;
      result.push({
        label: '...',
        value: `${start}`,
      });
      for (let i = start + 1; i < end; i++) {
        const el = i;
        result.push({
          label: `${el}`,
          value: `${el}`,
        });
      }
      result.push({
        label: '...',
        value: `${end}`,
      });
    }
    if (totalPage > 1) {
      result.push({
        label: `${totalPage}`,
        value: `${totalPage}`,
      });
    }
    return result;
  }, [totalPage, activePage]);

  const allowNext = useMemo(() => totalPage > Number(activePage), [totalPage, activePage]);
  const allowPrev = useMemo(() => activePage !== '1', [totalPage, activePage]);
  return (
    <Container>
      <WrapPage allow={allowPrev} onClick={() => allowPrev && onChange(`${Number(activePage) - 1}`)}>
        <Text color={allowPrev ? 'black' : 'gray'} weight={allowPrev ? 'bold' : 'light'}>Previous</Text>
      </WrapPage>
      {
        listShowPage.map((el) => (
          <WrapPage allow key={el.value} onClick={() => onChange(el.value)}>
            <Text weight={el.value === activePage ? 'bold' : 'light'}>{el.label}</Text>
          </WrapPage>
        ))
      }
      <WrapPage allow={allowNext} onClick={() => allowNext && onChange(`${Number(activePage) + 1}`)}>
        <Text color={allowNext ? 'black' : 'gray'} weight={allowNext ? 'bold' : 'light'}>Next</Text>
      </WrapPage>

    </Container>
  );
}

export default memo(Pagination);

const Container = styled.div`
  display: flex;
  gap: 10px;
`;
interface IWrapPage {
  allow?: boolean
}

const WrapPage = styled.div<IWrapPage>`
  cursor: ${({ allow }) => (allow ? 'pointer' : 'not-allowed')};
`;
