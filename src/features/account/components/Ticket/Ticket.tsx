import React, { useEffect, useMemo, useState } from 'react';
import { useLocation } from 'react-router';
import { getBillUser, Pagination } from '../..';
import qs from 'query-string';
import { billProps, filterProps } from '../../type';
import * as S from './Ticket.style';
import { Loading } from '@/features/Loading/Loading';
import { BillItem } from './BillItem';

export const Ticket = () => {
  const [filters, setFilters] = useState<filterProps>({
    page: 1,
    limit: 10,
  });
  const location = useLocation();
  const query = useMemo(() => qs.parse(location.search), [location.search]);
  const [billList, setBillList] = useState<billProps[]>([]);
  const [totalPage, setTotalPage] = useState<number>(0 || 1);
  const [tab, setTab] = useState<number>(0);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  useEffect(() => {
    setIsLoading(true);
    const _filter = {
      ...query,
      page: Number(query.page) || 1,
      limit: Number(query.limit) || 10,
    };
    setFilters(_filter);
    const params = {
      page: _filter.page,
      limit: _filter.limit,
    };
    getBillUser(qs.stringify(params)).then((res) => {
      setBillList(res.values.bills);
      setTotalPage(res.values.pageSize);
      setIsLoading(false);
    });

    return () => {
      setBillList([]);
      setTotalPage(0);
    };
  }, [query]);
  return (
    <S.Ticket>
      <S.TicketDiv>
        <S.TicketListTitle>
          <S.TicketTitle onClick={() => setTab(0)} active={tab === 0}>
            Vé
          </S.TicketTitle>
          |
          <S.TicketTitle onClick={() => setTab(1)} active={tab === 1}>
            Bắp nước
          </S.TicketTitle>
        </S.TicketListTitle>
        <Pagination url={'/account/ticket?'} filters={filters} totalPage={totalPage} />
      </S.TicketDiv>
      {isLoading && <Loading />}
      <S.BillList>
        {!isLoading &&
          billList.toString() &&
          billList.map((item) => (
            <React.Fragment key={item.bill._id}>
              {tab === 0 && item.type === 0 && (
                <BillItem data={item.data} total={item.bill.total} type={item.type} />
              )}
              {tab === 1 && item.type === 1 && (
                <BillItem data={item.data} total={item.bill.total} type={item.type} />
              )}
            </React.Fragment>
          ))}
      </S.BillList>
    </S.Ticket>
  );
};
