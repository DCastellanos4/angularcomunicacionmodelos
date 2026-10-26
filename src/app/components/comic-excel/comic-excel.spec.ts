import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ComicExcel } from './comic-excel';

describe('ComicExcel', () => {
  let component: ComicExcel;
  let fixture: ComponentFixture<ComicExcel>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ComicExcel],
    }).compileComponents();

    fixture = TestBed.createComponent(ComicExcel);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
