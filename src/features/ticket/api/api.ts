import { axios } from '@/lib/axios';
import { TicketAdd, TicketAddRespon, TicketRespon } from '..';

export const getListTicket = (idShowTime: string | string[] | null): Promise<TicketRespon> => {
  return axios.get(`/ticker/get-list-ticker/${idShowTime}`);
};

export const addTicket = (data: TicketAdd): Promise<TicketAddRespon> => {
  return axios.post('https://server-api-cinema.herokuapp.com/api/ticker/add', data);
};
