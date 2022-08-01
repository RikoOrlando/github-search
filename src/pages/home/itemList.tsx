import { memo } from 'react';
import { useSelector } from 'react-redux';
import CardUser from 'components/CardUser';
import CardRepository from 'components/CardRepository';
import LimitedRequest from 'components/LimitedRequest';
import NoData from 'components/NoData';
import Skeleton from 'components/Skeleton';
import { RootState } from 'store';
import { ContainerItemList, CardWrapper } from './style';

interface IItemList {
  typeSelected: string;
  handleTryAgain: () => void
}

function ItemList({ typeSelected, handleTryAgain }:IItemList) {
  const {
    items,
    isApiLimited,
    isLoading,
  } = useSelector((state: RootState) => state.github);
  if (isLoading) {
    return <Skeleton />;
  }
  return (
    <ContainerItemList>
      {
        isApiLimited && (
          <LimitedRequest handleTryAgain={handleTryAgain} />
        )
      }
      {
        !items.length && !isApiLimited && (
        <NoData />
        )
      }
      {
        !isApiLimited && (
        <CardWrapper>
          {items.map((el:any) => (
            typeSelected === 'users' ? <CardUser data={el} key={el.id} /> : <CardRepository data={el} key={el.id} />
          ))}
        </CardWrapper>
        )
      }
    </ContainerItemList>
  );
}

export default memo(ItemList);
