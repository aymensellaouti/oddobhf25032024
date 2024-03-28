import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestObservableComponent } from './test-observable.component';

describe('TestObservableComponent', () => {
  let component: TestObservableComponent;
  let fixture: ComponentFixture<TestObservableComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TestObservableComponent]
    });
    fixture = TestBed.createComponent(TestObservableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
