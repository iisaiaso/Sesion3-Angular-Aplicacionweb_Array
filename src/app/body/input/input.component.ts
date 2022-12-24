import { Component } from '@angular/core';

@Component({
  selector: 'body-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent {

  arrayC: String[] = [];
  addCurso(name: String) {
    if (name) {
      console.log(this.arrayC.push(String(name)));
      alert("Se ha ingresado curso correctamente!!!" )
    } else {
      alert("Tiene que ingresar curso!!!")
    }

  }

}
