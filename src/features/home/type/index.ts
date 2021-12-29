export interface MovieType {
  name: string;
  moveDuration: number;
  image: string;
  trailer: string;
  description: string;
  directorId: string;
  cast: string;
  screensId: string[];
  categoryId: string[];
  age: number;
}

export interface directorType {
  createAt: string;
  _id: string;
  name: string;
  dateOfBirth: string;
  image: string;
  joinDate: string;
  address: string;
  phoneNumber: string;
  email: string;
  introduce: string;
  male: boolean;
}

export interface categoryType {
  _id: string;
  name: string;
  image: string;
}

export interface screenType {
  _id: string;
  name: string;
  weekdayPrice: number;
  weekendPrice: number;
}

export interface MovieItemType {
  _id: string;
  name: string;
  moveDuration: boolean;
  image: string;
  trailer: string;
  description: string;
  director: directorType;
  cast: string;
  age: number;
  categories: categoryType[];
  screens: screenType[];
  dateStart: string;
  dateEnd: string;
}
export interface MovieRespon {
  success: boolean;
  message: string;
  values: {
    pageNumber: number;
    hasMore: boolean;
    movie: MovieItemType;
  };
}
export interface MoviesRespons {
  success: boolean;
  message: string;
  values: {
    movies: MovieItemType[];
  };
}
export interface MoviesRespon {
  success: boolean;
  message: string;
  values: {
    moviePlay: MovieItemType[];
    movieComing: MovieItemType[];
    movieEx: MovieItemType[];
  };
}
export interface CinemaType {
  _id: string;
  name: string;
  createAt: string;
  address: {
    city: string;
    district: string;
    ward: string;
    street: string;
    lat: string;
    lng: string;
  };
}

export interface CinemaRespon {
  success: boolean;
  message: string;
  values: {
    cinemas: CinemaType[];
  };
}

export interface dateType {
  date: string;
  day: string;
}

export interface DateRespon {
  success: boolean;
  message: string;
  values: {
    dates: string[];
  };
}

export interface roomType {
  _id: string;
  name: string;
  cinema: CinemaType;
  rowNumber: number;
  seatsInRow: number;
  screen: {
    _id: string;
    name: string;
    weekdayPrice: number;
    weekendPrice: number;
  };
}

export interface timeType {
  _id: string;
  time: string;
}

export interface showTimeType {
  _id: string;
  room: roomType;
  timeSlot: timeType;
}

export interface showTimesProps {
  cinema: CinemaType;
  screen2D: {
    title: string;
    showTimesDetails: showTimeType[];
  };
  screen3D: {
    title: string;
    showTimesDetails: showTimeType[];
  };
  screenIMAX: {
    title: string;
    showTimesDetails: showTimeType[];
  };
}

export interface ShowTimesRespon {
  success: boolean;
  message: string;
  showTimes: showTimesProps[];
}

export interface LocationRespon {
  success: boolean;
  message: string;
  values: {
    locations: string[];
  };
}

export interface showTimesType {
  _id: string;
  date: string;
  showTime: string;
  totalPrice: number;
  ticket: string;
  food: string;
  room: roomType;
  timeSlot: timeType;
}
export interface showTimesRespon {
  success: boolean;
  message: string;
  values: {
    showTimeDetails: showTimesType[];
  };
}
