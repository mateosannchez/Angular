import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent {

  elementos: any[] = [
    {
      imagen: '../../../../assets/img/news1.JPG',
      titulo: 'Ibrahim Mahama en Kunsthalle Osnabrück',
      fecha:'8 julio - 1 octubre 2023 | Alemania',
      tipo:'EXPOSICIÓN DEL MUSEO',
      valor: true
    },
    {
      imagen: '../../../../assets/img/news2.JPG',
      titulo: 'EANSELM El documental inmersivo de Wim Wenders sobre Anselm Kiefer',
      fecha: '5 julio 2023',
      tipo:'ANUNCIO',
      valor: true
    },
    {
      imagen: '../../../../assets/img/news3.JPG',
      titulo: 'Mona Hatoum y Käthe Kollwitz en Kunsthaus Zürich',
      fecha: '18 agosto - 12 noviembre 2023 | Suiza',
      tipo:'EXPOSICIÓN DEL MUSEO',
      valor: true
    },
    {
      imagen: '../../../../assets/img/news4.JPG',
      titulo: 'Puertas de teatro en LUMA Arles',
      fecha: '16 julio 2023 | Córdoba, Argentina',
      tipo:'EXPOSICIÓN DEL MUSEO',
      valor: true
    },
    {
      imagen: '../../../../assets/img/news5.JPG',
      titulo: '29 julio 2023 | White Cube Masons Yard',
      fecha: '16 julio 2023 | Córdoba, Argentina',
      tipo:'EVENTOS',
      valor: true
    },
    {
      imagen: '../../../../assets/img/news6.JPG',
      titulo: 'White Cube abrirá una galería en Seúl',
      fecha: '8 julio 2023',
      tipo:'PRESIONE SOLTAR', 
      valor: false
    },
    {
      imagen: '../../../../assets/img/news7.JPG',
      titulo: 'Marguerite Humeau en el Museo de Arte Nómada Black Cube',
      fecha: '28 julio 2023',
      tipo:'EXPOSICIÓN DEL MUSEO',
      valor: false
    }
  ];

  mostrarElementosFalse: boolean = false;

  mostrarElementos() {
    this.mostrarElementosFalse = !this.mostrarElementosFalse;
  }

}
