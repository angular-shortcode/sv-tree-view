import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SvTreeViewComponent } from './sv-tree-view.component';

describe('SvTreeViewComponent', () => {
  let component: SvTreeViewComponent;
  let fixture: ComponentFixture<SvTreeViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SvTreeViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SvTreeViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
