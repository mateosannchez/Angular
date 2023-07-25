import { Component } from '@angular/core';

@Component({
  selector: 'app-exhibicion',
  templateUrl: './exhibicion.component.html',
  styleUrls: ['./exhibicion.component.css']
})
export class ExhibicionComponent {

  public pinturas: Array<any>

  constructor(){
    this.pinturas = [
      { name: 'Usuario 1', active: true },
      { name: 'Usuario 2', active: false },
      { name: 'Usuario 3', active: true },
      { name: 'Usuario 4', active: false },
      { name: 'Usuario 5', active: true }
    ];
  }
  
  showInactive = false;

  toggleInactive() {
    this.showInactive = !this.showInactive;
  }
}
