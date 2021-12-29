import { axios } from '@/lib/axios';
import { PaymentLoginRespon, PaymentLoginType, TicketAdd, TicketAddRespon, TicketRespon } from '..';

export const getListTicket = (idShowTime: string | string[] | null): Promise<TicketRespon> => {
  return axios.get(`/ticker/get-list-ticker/${idShowTime}`);
};

export const addTicket = (data: TicketAdd): Promise<TicketAddRespon> => {
  return axios.post('/ticker/create-payment', data);
};

export const paymentLogin = (data: PaymentLoginType): Promise<PaymentLoginRespon> => {
  return axios.post('/payment/login', data);
};
