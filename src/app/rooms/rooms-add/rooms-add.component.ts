import { Component } from '@angular/core';
import { roomListI } from '../rooms';
import { RoomsService } from '../services/rooms.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-rooms-add',
  templateUrl: './rooms-add.component.html',
  styleUrls: ['./rooms-add.component.scss'],
})
export class RoomsAddComponent {
  room: roomListI = {
    roomType: '',
    amenites: '',
    checkInTime: '',
    checkOutTime: '',
    photos: '',
    price: 0,
    rating: 0,
    roomNumber: 0,
  };

  message: string = '';

  constructor(private roomsService: RoomsService) {}

  addRoom(roomsForm: NgForm) {
    this.roomsService.addRoom(this.room).subscribe((data) => {
      this.message = 'room added';
      roomsForm.resetForm({
        roomType: '',
        amenites: '',
        checkInTime: '',
        checkOutTime: '',
        photos: '',
        price: 0,
        rating: 0,
        roomNumber: 0,
      });
    });
  }
}
