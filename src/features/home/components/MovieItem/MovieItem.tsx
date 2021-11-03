import { path } from '@/constants';
import React from 'react';
import { MovieItemType } from '../../type';
import * as S from './MovieItem.style';
interface MovieItemProps {
  list: MovieItemType[];
}
export const MovieItem: React.FC<MovieItemProps> = ({ list }) => {
  return (
    <S.MovieList>
      {list.slice(0, 6).map((item: MovieItemType) => (
        <S.MovieItem key={item._id}>
          <S.MovieItemIMG>
            <img src={item.image} alt="" />
            <S.MovieItemOverLay>
              <S.MovieItemLink to={path.detail + `/?id=${item._id}`}>Chi tiết</S.MovieItemLink>
            </S.MovieItemOverLay>
          </S.MovieItemIMG>
          <S.MovieItemNameEng>{item.name}</S.MovieItemNameEng>
          {/* <S.MovieItemNameVNI>{item.titleVN}</S.MovieItemNameVNI> */}
        </S.MovieItem>
      ))}
    </S.MovieList>
  );
};
