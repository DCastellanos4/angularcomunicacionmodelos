import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PadreNumeros } from './padre-numeros';

describe('PadreNumeros', () => {
  let component: PadreNumeros;
  let fixture: ComponentFixture<PadreNumeros>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PadreNumeros],
    }).compileComponents();

    fixture = TestBed.createComponent(PadreNumeros);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
