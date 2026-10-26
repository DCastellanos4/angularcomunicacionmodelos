import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HijoNumeros } from './hijo-numeros';

describe('HijoNumeros', () => {
  let component: HijoNumeros;
  let fixture: ComponentFixture<HijoNumeros>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HijoNumeros],
    }).compileComponents();

    fixture = TestBed.createComponent(HijoNumeros);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
