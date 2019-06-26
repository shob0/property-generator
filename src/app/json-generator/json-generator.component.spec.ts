import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JSONGeneratorComponent } from './json-generator.component';

describe('JSONGeneratorComponent', () => {
  let component: JSONGeneratorComponent;
  let fixture: ComponentFixture<JSONGeneratorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JSONGeneratorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JSONGeneratorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
