import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HeaderToggleService {

  private showHeader: boolean = true;

  public getShowHeader(): boolean {
    return this.showHeader;
  }

  public setShowHeader(show: boolean): void {
    this.showHeader = show;
  }

  constructor() { }
}
