import React from 'react';
import * as S from '@/features/ticket/components/Bookticket/Bookticket.style';

interface CheckAgeProps {
  age: number;
}

export const CheckAge: React.FC<CheckAgeProps> = ({ age }) => {
  return (
    <S.BookticketRightAge>
      {age < 13 && (
        <>
          <span>P</span>
          <span>(*) Phim dành cho mọi đối tượng</span>
        </>
      )}
      {age >= 13 && age < 16 && (
        <>
          <span>C13</span>
          <span>(*) Phim chỉ dành cho khán giả từ 13 tuổi trở lên</span>
        </>
      )}
      {age >= 16 && age < 18 && (
        <>
          <span>C16</span>
          <span>(*) Phim chỉ dành cho khán giả từ 16 tuổi trở lên</span>
        </>
      )}
      {age >= 18 && (
        <>
          <span>C18</span>
          <span>(*) Phim chỉ dành cho khán giả từ 18 tuổi trở lên</span>
        </>
      )}
    </S.BookticketRightAge>
  );
};
