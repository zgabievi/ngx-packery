import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NgxPackeryItemComponent } from './ngx-packery-item.component';
import { NgxPackeryComponent } from './ngx-packery.component';
import { NgxPackeryService } from './ngx-packery.service';

@NgModule({
  imports: [CommonModule],
  declarations: [NgxPackeryComponent, NgxPackeryItemComponent],
  exports: [NgxPackeryComponent, NgxPackeryItemComponent],
  providers: [NgxPackeryService]
})
export class NgxPackeryModule {}
