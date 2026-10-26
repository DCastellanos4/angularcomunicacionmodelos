import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ComicJson } from './comic-json';

describe('ComicJson', () => {
  let component: ComicJson;
  let fixture: ComponentFixture<ComicJson>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ComicJson],
    }).compileComponents();

    fixture = TestBed.createComponent(ComicJson);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
