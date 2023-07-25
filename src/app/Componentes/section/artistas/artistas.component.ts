import { Component } from '@angular/core';

@Component({
  selector: 'app-artistas',
  templateUrl: './artistas.component.html',
  styleUrls: ['./artistas.component.css']
})
export class ArtistasComponent {
  public noticias: Array<any>

  constructor(){
    this.noticias = [

      { name: 'Ibrahim Mahama en Kunsthalle Osnabrück',
      img:'../../../../assets/img/artist1.JPG',
      active: true },

      { name: 'ANSELM El documental inmersivo de Wim Wenders sobre Anselm Kiefer', 
      img:'../../../../assets/img/artist2.JPG',
      active: true },

      { name: 'Mona Hatoum y Käthe Kollwitz en Kunsthaus Zürich', 
      img:'../../../../assets/img/artist3.JPG',
      active: true },

      { name: 'Puertas de teatro en LUMA Arles', 
      img:'../../../../assets/img/artist4.JPG',
      active: true },

      { name:'White Cube en Mayfair Art Weekend 2023', 
      img:'../../../../assets/img/artist5.JPG',
      active: true },

      { name: 'Marguerite Humeau',
      img:'../../../../assets/img/artist6.JPG',
      active: true },
      

      { name: 'Robert Irwin',  
      img:'../../../../assets/img/artist7.JPG',
      active: true },

      { name: 'Anselm Kiefer',  
      img:'../../../../assets/img/artist8.JPG',
      active: true },
    ];
  }


  showInactive = false;

  toggleInactive() {
    this.showInactive = !this.showInactive;
  }
}
