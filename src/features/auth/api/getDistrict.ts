import { useQuery } from 'react-query';

import { axios } from '@/lib/axios';
import { QueryConfig } from '@/lib/react-query';

import { District } from '../types';

export const getDistrict = (code: string): Promise<District[]> => {
  return axios.get(`https://provinces.open-api.vn/api/p/${code}?depth=2`);
};

type UseCitiesOptions = {
  config?: QueryConfig<typeof getDistrict>;
  code: string;
};

export const useDistricts = ({ config = {}, code }: UseCitiesOptions) => {
  return useQuery({
    ...config,
    queryKey: ['district'],
    queryFn: () => getDistrict(code),
  });
};
