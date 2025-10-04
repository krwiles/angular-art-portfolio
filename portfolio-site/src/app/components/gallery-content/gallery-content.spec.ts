import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GalleryContent } from './gallery-content';

describe('GalleryContent', () => {
  let component: GalleryContent;
  let fixture: ComponentFixture<GalleryContent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GalleryContent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GalleryContent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
