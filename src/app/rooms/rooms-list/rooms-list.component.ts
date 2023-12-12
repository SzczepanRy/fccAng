import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
  SimpleChanges,
} from '@angular/core';
import { roomListI } from '../rooms';

@Component({
  selector: 'rooms-list',
  templateUrl: './rooms-list.component.html',
  styleUrls: ['./rooms-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RoomsListComponent implements OnChanges, OnInit {
  @Input()
  rooms: roomListI[] = [];

  @Input()
  title: string = '';

  @Output()
  roomSelected: EventEmitter<roomListI> = new EventEmitter<roomListI>();

  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);
    if (changes['title']) {
    }
  }

  ngOnInit(): void {}

  selectRoom(room: roomListI) {
    this.roomSelected.emit(room);
  }
}
