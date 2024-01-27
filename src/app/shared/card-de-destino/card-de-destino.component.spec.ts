import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardDeDestinoComponent } from './card-de-destino.component';

describe('CardDeDestinoComponent', () => {
  let component: CardDeDestinoComponent;
  let fixture: ComponentFixture<CardDeDestinoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CardDeDestinoComponent]
    });
    fixture = TestBed.createComponent(CardDeDestinoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
