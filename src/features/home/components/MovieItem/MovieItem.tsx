import { path } from '@/constants';
import React from 'react';
import { MovieItemType } from '../../type';
import * as S from './MovieItem.style';
interface MovieItemProps {
  item: MovieItemType;
  height?: boolean;
}
export const MovieItem: React.FC<MovieItemProps> = ({ item, height }) => {
  return (
    <S.MovieItem key={item._id}>
      <S.MovieItemIMG>
        <img src={item.image} alt="" style={height ? { height: '253px' } : { height: '453px' }} />
        <S.MovieItemOverLay>
          <S.MovieItemLink to={path.detail + `/?id=${item._id}`}>Chi tiết</S.MovieItemLink>
        </S.MovieItemOverLay>
      </S.MovieItemIMG>
      <S.MovieItemNameEng>{item.name}</S.MovieItemNameEng>
    </S.MovieItem>
  );
};
