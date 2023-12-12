import { Component } from '@angular/core';
import { roomI, roomListI } from './rooms';

@Component({
  selector: 'app-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.scss'],
})
export class RoomsComponent {
  rooms: roomI = {
    totalRooms: 20,
    availibleRooms: 1,
    bookedRooms: 5,
  };

  roomList: roomListI[] = [
    {
      roomNumber: 1,
      roomType: 'Deluxe Room',
      amenites: 'air conditioning ',
      price: 500,
      photos:
        'https://www.google.com/imgres?imgurl=https%3A%2F%2Fcf.bstatic.com%2Fxdata%2Fimages%2Fhotel%2Fmax1024x768%2F194702399.jpg%3Fk%3D14e9a332f4f20a67f72f8d5938cd6577f5c932a0653f59ae89d020f119f0d9be%26o%3D%26hp%3D1&tbnid=Dbw5564463BwEM&vet=12ahUKEwiDssa3-YmDAxWi5gIHHd_0A2sQMygCegQIARBQ..i&imgrefurl=https%3A%2F%2Fwww.booking.com%2Fhotel%2Fcy%2Fthe-room.pl.html&docid=o5agkt7Lm2FHrM&w=1024&h=768&q=room&ved=2ahUKEwiDssa3-YmDAxWi5gIHHd_0A2sQMygCegQIARBQ',
      checkInTime: new Date('11-nov-2023'),
      checkOutTime: new Date('11-nov-2023'),
    },
    {
      roomNumber: 2,
      roomType: 'Deluxe Room',
      amenites: 'air conditioning ',
      price: 500,
      photos:
        'https://www.google.com/imgres?imgurl=https%3A%2F%2Fcf.bstatic.com%2Fxdata%2Fimages%2Fhotel%2Fmax1024x768%2F194702399.jpg%3Fk%3D14e9a332f4f20a67f72f8d5938cd6577f5c932a0653f59ae89d020f119f0d9be%26o%3D%26hp%3D1&tbnid=Dbw5564463BwEM&vet=12ahUKEwiDssa3-YmDAxWi5gIHHd_0A2sQMygCegQIARBQ..i&imgrefurl=https%3A%2F%2Fwww.booking.com%2Fhotel%2Fcy%2Fthe-room.pl.html&docid=o5agkt7Lm2FHrM&w=1024&h=768&q=room&ved=2ahUKEwiDssa3-YmDAxWi5gIHHd_0A2sQMygCegQIARBQ',
      checkInTime: new Date('11-nov-2023'),
      checkOutTime: new Date('11-nov-2023'),
    },
    {
      roomNumber: 3,
      roomType: 'Deluxe Room',
      amenites: 'air conditioning ',
      price: 500,
      photos:
        'https://www.google.com/imgres?imgurl=https%3A%2F%2Fcf.bstatic.com%2Fxdata%2Fimages%2Fhotel%2Fmax1024x768%2F194702399.jpg%3Fk%3D14e9a332f4f20a67f72f8d5938cd6577f5c932a0653f59ae89d020f119f0d9be%26o%3D%26hp%3D1&tbnid=Dbw5564463BwEM&vet=12ahUKEwiDssa3-YmDAxWi5gIHHd_0A2sQMygCegQIARBQ..i&imgrefurl=https%3A%2F%2Fwww.booking.com%2Fhotel%2Fcy%2Fthe-room.pl.html&docid=o5agkt7Lm2FHrM&w=1024&h=768&q=room&ved=2ahUKEwiDssa3-YmDAxWi5gIHHd_0A2sQMygCegQIARBQ',
      checkInTime: new Date('11-nov-2023'),
      checkOutTime: new Date('11-nov-2023'),
    },
  ];

  hotelName: string = 'hotel';
  numberOfRooms: number = 10;
  hideHotels = false;

  toggle() {
    this.hideHotels = !this.hideHotels;
  }
  add() {
    this.rooms.availibleRooms++;
  }
}
