import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ComicSimple } from './comic-simple';

describe('ComicSimple', () => {
  let component: ComicSimple;
  let fixture: ComponentFixture<ComicSimple>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ComicSimple],
    }).compileComponents();

    fixture = TestBed.createComponent(ComicSimple);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
