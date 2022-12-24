import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TitleComponent } from './title/title.component';
import { InputComponent } from './input/input.component';



@NgModule({
  declarations: [
    TitleComponent,
    InputComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    TitleComponent,
    InputComponent
  ]
})
export class BodyModule { }
