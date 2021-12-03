import React from 'react';
import * as S from './Loading2.style';

export const Loading2 = () => {
  return (
    <S.Loading>
      {Array(4)
        .fill(0)
        .map((item, index) => (
          <span key={index} />
        ))}
    </S.Loading>
  );
};
