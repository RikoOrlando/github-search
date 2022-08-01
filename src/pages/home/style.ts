import styled from 'styled-components';

export const Container = styled.section`
  display: flex;
  justify-content: center;
  background: white;
  min-height: 100vh;
`;
export const Content = styled.div`
  flex: 1;
  width: 100%;
  max-width: 1200px;
  padding: 20px;
`;

export const WrapperFilter = styled.div`
  display: flex;
  margin-top: 20px;
  gap: 8px;
`;

export const CardWrapper = styled.div`
  margin-top: 20px;
  gap: 10px;
  flex-wrap: wrap;
  display: flex;
`;

export const PaginationWrapper = styled.div`
  margin-top: 40px;
  display: flex;
  justify-content: center;
`;

export const ContainerItemList = styled.div`
  flex: 1;
`;
