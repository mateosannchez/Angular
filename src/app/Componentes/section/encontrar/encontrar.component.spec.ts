import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EncontrarComponent } from './encontrar.component';

describe('EncontrarComponent', () => {
  let component: EncontrarComponent;
  let fixture: ComponentFixture<EncontrarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EncontrarComponent]
    });
    fixture = TestBed.createComponent(EncontrarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
