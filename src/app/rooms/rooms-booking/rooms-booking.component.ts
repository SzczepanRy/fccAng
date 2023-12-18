import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, map } from 'rxjs';

@Component({
  selector: 'app-rooms-booking',
  templateUrl: './rooms-booking.component.html',
  styleUrls: ['./rooms-booking.component.scss'],
})
export class RoomsBookingComponent implements OnInit {
  // id: number = 0;

  id$: Observable<number> = this.router.paramMap.pipe(
    map((params) => {
      return Number(params.get('id'));
    })
  );
  constructor(private router: ActivatedRoute) {}
  ngOnInit(): void {
    // ok but cant update
    // this.id = this.router.snapshot.params['id'];
    // bad
    // this.router.params.subscribe((params) => {
    //   this.id = params['id'];
    // });
  }
}
