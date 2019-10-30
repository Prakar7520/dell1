import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BackscreenComponent } from './backscreen.component';

describe('BackscreenComponent', () => {
  let component: BackscreenComponent;
  let fixture: ComponentFixture<BackscreenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BackscreenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BackscreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
