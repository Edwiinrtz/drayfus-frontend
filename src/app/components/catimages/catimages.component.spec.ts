import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CatimagesComponent } from './catimages.component';

describe('CatimagesComponent', () => {
  let component: CatimagesComponent;
  let fixture: ComponentFixture<CatimagesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CatimagesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CatimagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
