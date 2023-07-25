import { Injectable, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  scrollEvent: EventEmitter<void> = new EventEmitter<void>();

  emitScrollEvent() {
    this.scrollEvent.emit();
  }

  constructor() { }
}
