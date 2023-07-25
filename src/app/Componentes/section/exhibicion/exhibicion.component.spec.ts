import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExhibicionComponent } from './exhibicion.component';

describe('ExhibicionComponent', () => {
  let component: ExhibicionComponent;
  let fixture: ComponentFixture<ExhibicionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ExhibicionComponent]
    });
    fixture = TestBed.createComponent(ExhibicionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
