import {
  AfterContentInit,
  Component,
  ContentChild,
  OnInit,
  ViewChild,
} from '@angular/core';
import { EmployeeComponent } from '../employee/employee.component';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.scss'],
})
export class ContainerComponent implements OnInit, AfterContentInit {
  @ContentChild(EmployeeComponent) employee!: EmployeeComponent;

  ngOnInit(): void {}
  ngAfterContentInit(): void {
    this.employee.empName = 'new name';
  }
}
