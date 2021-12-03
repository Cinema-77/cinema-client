export interface countComboProps {
  _id: string;
  quantity: number;
  totalPrice: number;
}

export interface ticketProps {
  idSeat: string;
  price: number;
  seatName: string;
  showTimesDetails: string;
  status: number;
}

export interface seatType {
  idSeat: string;
  price: number;
  seatName: string;
  showTimesDetails: string;
  status: number;
}

export interface seatProps {
  nameRow: string;
  nameSeats: seatType[];
}

export interface comboType {
  _id: string;
  price: number;
  name: string;
  image: string;
  unit: string;
}

export interface MovieType {
  _id: string;
  cast: string;
  age: number;
  description: string;
  director: string;
  image: string;
  moveDuration: number;
  name: string;
  trailer: string;
}

export interface showTimesType {
  _id: string;
  status: boolean;
  cinema: string;
  movie: MovieType;
}

export interface timeType {
  _id: string;
  time: string;
}

export interface addressType {
  city: string;
  district: string;
  lat: string;
  lng: string;
  street: string;
  ward: string;
}

export interface cinemaType {
  _id: string;
  name: string;
  createAt: string;
  address: addressType;
}

export interface screenType {
  _id: string;
  name: string;
  weekdayPrice: number;
  weekendPrice: number;
}

export interface roomType {
  _id: string;
  name: string;
  rowNumber: number;
  seatsInRow: number;
  cinema: cinemaType;
  screen: screenType;
}

export interface showTimesProps {
  _id: string;
  date: string;
  showTime: showTimesType;
  timeSlot: timeType;
  room: roomType;
}

export interface TicketRespon {
  message: string;
  success: boolean;
  values: {
    combos: comboType[];
    showTimeDetail: showTimesProps;
    tickets: seatProps[];
  };
}

export interface TicketAdd {
  showTimeDetailId: string | string[] | null;
  payment: {
    // info: {
    //   username: string;
    //   type: number;
    //   otp: string;
    // };
    type: number;
  };
  data: seatType[];
  combos: {
    _id: string;
    totalPrice: number;
    quantity: number;
  }[];
}

export interface billProps {
  createAt: string;
  paymentType: number;
  total: number;
  user: string;
  _id: string;
}

export interface TicketAddRespon {
  message: string;
  success: boolean;
  uri: string;
}

export interface PaymentLoginType {
  username: string;
  password: string;
}

export interface PaymentLoginRespon {
  success: boolean;
  message: string;
}
