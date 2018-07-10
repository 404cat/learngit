import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BackendMainComponent } from './backend-main.component';

describe('BackendMainComponent', () => {
  let component: BackendMainComponent;
  let fixture: ComponentFixture<BackendMainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BackendMainComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BackendMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
