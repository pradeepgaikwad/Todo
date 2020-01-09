import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LostTodosComponent } from './lost-todos.component';

describe('LostTodosComponent', () => {
  let component: LostTodosComponent;
  let fixture: ComponentFixture<LostTodosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LostTodosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LostTodosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
