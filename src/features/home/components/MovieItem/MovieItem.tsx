import { path } from '@/constants';
import React from 'react';
import * as S from './MovieItem.style';

interface MovieItemProps {
  image: any;
}

export const MovieItem: React.FC<MovieItemProps> = ({ image }) => {
  return (
    <S.MovieList>
      {image.slice(0, 6).map((img: any, index: number) => (
        <S.MovieItem key={index}>
          <S.MovieItemIMG>
            <img src={img.film} alt="" />
            <S.MovieItemOverLay>
              <S.MovieItemLink to={path.detail}>Chi tiết</S.MovieItemLink>
            </S.MovieItemOverLay>
          </S.MovieItemIMG>
          <S.MovieItemNameEng>{img.titleEN}</S.MovieItemNameEng>
          <S.MovieItemNameVNI>{img.titleVN}</S.MovieItemNameVNI>
        </S.MovieItem>
      ))}
    </S.MovieList>
  );
};
