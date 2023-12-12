export interface roomI {
  totalRooms: number;
  availibleRooms: number;
  bookedRooms: number;
}

export interface roomListI {
  roomNumber: number;
  roomType: string;
  amenites: string;
  price: number;
  photos: string;
  checkInTime: Date;
  checkOutTime: Date;
  rating: number;
}
