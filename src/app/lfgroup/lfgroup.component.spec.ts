import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LfgroupComponent } from './lfgroup.component';

describe('LfgroupComponent', () => {
  let component: LfgroupComponent;
  let fixture: ComponentFixture<LfgroupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LfgroupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LfgroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
