import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavlistComponent } from './navlist.component';

describe('NavlistComponent', () => {
  let component: NavlistComponent;
  let fixture: ComponentFixture<NavlistComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NavlistComponent]
    });
    fixture = TestBed.createComponent(NavlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
