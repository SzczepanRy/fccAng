import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header.component';

@NgModule({
  declarations: [HeaderComponent],
  imports: [CommonModule],
  exports: [HeaderComponent], /// when it is used outside the module ADD WHEN YOU WANT TO REUSE
})
export class HeaderModule {}
