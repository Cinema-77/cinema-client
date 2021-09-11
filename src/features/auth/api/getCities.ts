import { useQuery } from 'react-query';

import { axios } from '@/lib/axios';
import { QueryConfig } from '@/lib/react-query';

import { Cities } from '../types';

export const getCites = (): Promise<Cities[]> => {
  return axios.get('https://provinces.open-api.vn/api/p/');
};

type UseCitiesOptions = {
  config?: QueryConfig<typeof getCites>;
};

export const useCities = ({ config = {} }: UseCitiesOptions = {}) => {
  return useQuery({
    ...config,
    queryKey: ['cities'],
    queryFn: () => getCites(),
  });
};
