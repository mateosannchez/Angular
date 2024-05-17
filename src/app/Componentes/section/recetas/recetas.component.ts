import { Component } from '@angular/core';

@Component({
  selector: 'app-recetas',
  templateUrl: './recetas.component.html',
  styleUrls: ['./recetas.component.css']
})
export class RecetasComponent {
  texto: string = 'langosta frita y macarrones con queso';

  cambiarTextoYColor() {
    this.texto = 'ver ahora';
    // Puedes cambiar el color de fondo aquí si lo deseas
  }

  resetearTextoYColor() {
    this.texto = 'langosta frita y macarrones con queso';
    // Puedes resetear el color de fondo aquí si lo deseas
  }

  texto1: string = 'FIESTA DE NUGGETS DE POLLO';

  cambiarTextoYColor1() {
    this.texto1 = 'ver ahora';
    // Puedes cambiar el color de fondo aquí si lo deseas
  }

  resetearTextoYColor1() {
    this.texto1 = 'FIESTA DE NUGGETS DE POLLO';
    // Puedes resetear el color de fondo aquí si lo deseas
  }

  texto2: string = 'ENSALADA DE ALBÓNDIGAS';

  cambiarTextoYColor2() {
    this.texto2 = 'ver ahora';
    // Puedes cambiar el color de fondo aquí si lo deseas
  }

  resetearTextoYColor2() {
    this.texto2 = 'ENSALADA DE ALBÓNDIGAS';
    // Puedes resetear el color de fondo aquí si lo deseas
  }
}
