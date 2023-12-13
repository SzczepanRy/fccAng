import {
  AfterViewInit,
  Component,
  DoCheck,
  OnInit,
  QueryList,
  ViewChild,
  ViewChildren,
} from '@angular/core';
import { roomI, roomListI } from './rooms';
import { HeaderComponent } from '../header/header.component';

@Component({
  selector: 'app-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.scss'],
})
export class RoomsComponent implements OnInit, DoCheck, AfterViewInit {
  rooms: roomI = {
    totalRooms: 20,
    availibleRooms: 1,
    bookedRooms: 5,
  };

  selectedRoom!: roomListI;

  roomList: roomListI[] = [];

  ngOnInit(): void {
    console.log(this.headerComponent);

    this.roomList = [
      {
        roomNumber: 1,
        roomType: 'Deluxe Room',
        amenites: 'air conditioning ',
        price: 500,
        photos:
          'https://www.google.com/imgres?imgurl=https%3A%2F%2Fcf.bstatic.com%2Fxdata%2Fimages%2Fhotel%2Fmax1024x768%2F194702399.jpg%3Fk%3D14e9a332f4f20a67f72f8d5938cd6577f5c932a0653f59ae89d020f119f0d9be%26o%3D%26hp%3D1&tbnid=Dbw5564463BwEM&vet=12ahUKEwiDssa3-YmDAxWi5gIHHd_0A2sQMygCegQIARBQ..i&imgrefurl=https%3A%2F%2Fwww.booking.com%2Fhotel%2Fcy%2Fthe-room.pl.html&docid=o5agkt7Lm2FHrM&w=1024&h=768&q=room&ved=2ahUKEwiDssa3-YmDAxWi5gIHHd_0A2sQMygCegQIARBQ',
        checkInTime: new Date('11-nov-2023'),
        checkOutTime: new Date('11-nov-2023'),
        rating: 3,
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
        rating: 4.2,
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
        rating: 3.5,
      },
    ];
  }

  selectRoom(room: roomListI) {
    console.log(room);
    this.selectedRoom = room;
  }

  addRoom() {
    const room: roomListI = {
      roomNumber: 4,
      roomType: 'Deluxe Room',
      amenites: 'air conditioning ',
      price: 5020,
      photos:
        'https://www.google.com/imgres?imgurl=https%3A%2F%2Fcf.bstatic.com%2Fxdata%2Fimages%2Fhotel%2Fmax1024x768%2F194702399.jpg%3Fk%3D14e9a332f4f20a67f72f8d5938cd6577f5c932a0653f59ae89d020f119f0d9be%26o%3D%26hp%3D1&tbnid=Dbw5564463BwEM&vet=12ahUKEwiDssa3-YmDAxWi5gIHHd_0A2sQMygCegQIARBQ..i&imgrefurl=https%3A%2F%2Fwww.booking.com%2Fhotel%2Fcy%2Fthe-room.pl.html&docid=o5agkt7Lm2FHrM&w=1024&h=768&q=room&ved=2ahUKEwiDssa3-YmDAxWi5gIHHd_0A2sQMygCegQIARBQ',
      checkInTime: new Date('11-nov-2023'),
      checkOutTime: new Date('11-nov-2023'),
      rating: 3,
    };
    // this.roomList.push(room);
    this.roomList = [...this.roomList, room];
  }

  @ViewChild(HeaderComponent) headerComponent!: HeaderComponent;

  @ViewChildren(HeaderComponent)
  headerChildrenComponent!: QueryList<HeaderComponent>;

  hotelName: string = 'hotel';
  numberOfRooms: number = 10;
  hideHotels = false;

  ngDoCheck(): void {
    console.log('on changes is called');
  }

  ngAfterViewInit() {
    this.headerComponent.title = 'dooms iew';
  }

  title: string = 'initial ';

  toggle() {
    this.hideHotels = !this.hideHotels;
    this.title = 'toggled ';
  }
  add() {
    this.rooms.availibleRooms++;
  }
}
