import { InfoValues } from '..';

export interface cinemaType {
  _id: string;
  name: string;
  createAt: string;
  address: {
    city: string;
    district: string;
    lat: string;
    lng: string;
    street: string;
    ward: string;
  };
}

export interface movieType {
  _id: string;
  name: string;
  trailer: string;
  moveDuration: number;
  image: string;
  director: string;
  description: string;
  cast: string;
  age: number;
}

export interface timeType {
  _id: string;
  time: string;
}

export interface roomType {
  cinema: string;
  name: string;
  rowNumber: number;
  screen: string;
  seatsInRow: number;
  _id: string;
}

export interface seatProps {
  _id: string;
  status: number;
  seatName: string;
  price: number;
  idSeat: string;
  user: string;
  image: string;
  name: string;
  quantity: string;
  unit: string;
  showTimeDetail: {
    countTicket: number;
    date: string;
    room: roomType;
    showTime: {
      cinema: cinemaType;
      movie: movieType;
      status: boolean;
      _id: string;
    };
    timeSlot: timeType;
    totalPrice: number;
    _id: string;
  };
}

export interface billProps {
  type: number;
  bill: {
    _id: string;
    createAt: string;
    paymentType: number;
    total: number;
    user: string;
  };
  data: seatProps[];
}
export interface billRespon {
  message: string;
  success: boolean;
  values: {
    hasMore: boolean;
    page: number;
    pageSize: number;
    bills: billProps[];
  };
}
export interface filterProps {
  page: number;
  limit: number;
}
export interface detailProps {
  account: {
    couponList: couponType[];
    user: userType;
  };
}

export interface userType {
  profile: {
    address: {
      city: string;
      district: string;
      ward: string;
      street: string;
    };
    fullname: string;
    dateOfBirth: string;
  };
  accept: boolean;
  createdAt: string;
  _id: string;
  email: string;
  phoneNumber: string;
  moneyPoint: number;
  point: number;
}

export interface UserRespon {
  success: boolean;
  message: string;
  user: userType;
}

export interface couponType {
  _id: string;
  name: string;
  image: string;
  point: number;
  type: number;
  foodId: string;
  screenId: string;
  discount: string;
}

export interface CouponRespon {
  status: boolean;
  message: string;
  values: {
    gifts: couponType[];
  };
}

export interface giftType {
  _id: string;
  code: string;
  pointTotal: number;
  dateExpiry: string;
  user: userType;
  gift: {
    _id: string;
    name: string;
    image: string;
    point: number;
    type: number;
  };
  status: number;
}

export interface GiftRespon {
  success: boolean;
  message: string;
  values: {
    coupon: giftType;
  };
}

export interface GetCouponUserRespon {
  success: boolean;
  message: string;
  values: {
    coupons: giftType[];
    hasMore: boolean;
    page: string;
    pageSize: 1;
  };
}

export interface PasswordRespon {
  success: boolean;
  message: string;
  values: {
    errors: InfoValues;
  };
}
