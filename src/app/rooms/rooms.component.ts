import { Component } from '@angular/core';

@Component({
  selector: 'app-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.scss'],
})
export class RoomsComponent {
  hotelName: string = 'hotel';
  numberOfRooms: number = 10;
  hideHotels = false;
  toggle() {
    this.hideHotels = !this.hideHotels;
  }
  add() {
    this.numberOfRooms++;
  }
}
