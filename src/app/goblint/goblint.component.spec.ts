import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GoblintComponent } from './goblint.component';

describe('GoblintComponent', () => {
  let component: GoblintComponent;
  let fixture: ComponentFixture<GoblintComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GoblintComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GoblintComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
