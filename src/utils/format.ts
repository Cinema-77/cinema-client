import { default as dayjs } from 'dayjs';

export const formatDate = (date: number) => dayjs(date).format('MMMM D, YYYY h:mm A');

export const formatSTK = (stk: string) => {
  const number = stk.split('');
  const firstNumber = number.splice(0, 3);
  const centerNumber = number.length - 6;
  const centerValue: any[] = [];
  for (let i = 0; i < centerNumber; i++) {
    centerValue.push('x');
  }
  const lastNumber = number.splice(-3, 3);
  return `${firstNumber.join('')}${centerValue.join('')}${lastNumber.join('')}`;
};
