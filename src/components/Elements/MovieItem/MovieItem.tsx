import React from 'react';
import * as S from './MovieItem.style';

interface MovieItemProps {
  image: any;
}

export const MovieItem: React.FC<MovieItemProps> = ({ image }) => {
  return (
    <S.MovieList>
      {image.map((img: any, index: any) => (
        <S.MovieItem key={index}>
          <S.MovieItemIMG to="">
            <img src={img.film} alt="" />
          </S.MovieItemIMG>
          <S.MovieItemNameEng>{img.titleEN}</S.MovieItemNameEng>
          <S.MovieItemNameVNI>{img.titleVN}</S.MovieItemNameVNI>
        </S.MovieItem>
      ))}
    </S.MovieList>
  );
};
