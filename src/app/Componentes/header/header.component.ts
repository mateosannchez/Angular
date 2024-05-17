import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  // showNav: boolean = false;

  // @HostListener('window:scroll', [])
  // onWindowScroll() {
  //     const scrollPosition = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
  //     if (scrollPosition > 0) {
  //         this.showNav = true;
  //     } else {
  //         this.showNav = false;
  //     }
  // }

}
