import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalBuscaComponent } from './modal-busca.component';

describe('ModalBuscaComponent', () => {
  let component: ModalBuscaComponent;
  let fixture: ComponentFixture<ModalBuscaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ModalBuscaComponent]
    });
    fixture = TestBed.createComponent(ModalBuscaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
