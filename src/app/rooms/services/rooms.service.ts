import { Inject, Injectable } from '@angular/core';
import { roomListI } from '../rooms';
import { APP_SERVICE_CONF } from 'src/app/AppConfig/apponfig.service';
import { AppConfig } from 'src/app/AppConfig/appconfig.interface';
import { HttpClient, HttpHeaders, HttpRequest } from '@angular/common/http';
import { shareReplay } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class RoomsService {
  roomList: roomListI[] = [];

  headers = new HttpHeaders({
    token: '71430340734780724398798',
  });
  // getRooms$ = this.http
  //   .get<roomListI[]>('/api', {
  //     headers: this.headers,
  //   })
  //   .pipe(shareReplay(1)); // cashing the initial data
  getRooms$ = this.http.get<roomListI[]>('/api').pipe(shareReplay(1)); // cashing the initial data

  constructor(
    @Inject(APP_SERVICE_CONF) private config: AppConfig,
    private http: HttpClient
  ) {
    console.log(this.config.url);
    console.log('roomservece called');
  }
  getRooms() {
    console.log();

    return this.http.get<roomListI[]>('http://localhost:8080/api');
  }
  i = 1;
  addRoom(room: roomListI) {
    this.i++;
    return this.http.post<roomListI[]>('http://localhost:8080/api/', {
      ...room,
      id: room.roomNumber + this.i,
    });
  }
  // addRoom(room: roomListI) {
  //   this.i++;
  //   return this.http.post<roomListI[]>(
  //     'http://localhost:8080/api/',
  //     {
  //       ...room,
  //       id: room.roomNumber + this.i,
  //     },
  //     {
  //       headers: this.headers,
  //     }
  //   );
  // }
  editRoom(room: roomListI) {
    this.i++;
    return this.http.put<roomListI[]>(
      'http://localhost:8080/api/' + room.roomNumber,
      {
        ...room,
        rating: this.i,
      }
    );
  }

  deleteRoom(id: number) {
    return this.http.delete<roomListI[]>('http://localhost:8080/api/' + id);
  }

  getPhotos() {
    const request = new HttpRequest(
      'GET',
      `https://jsonplaceholder.typicode.com/photos`,
      {
        reportProgress: true,
      }
    );
    return this.http.request(request);
  }
}
