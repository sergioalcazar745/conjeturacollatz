import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuCollatzComponent } from './menu-collatz.component';

describe('MenuCollatzComponent', () => {
  let component: MenuCollatzComponent;
  let fixture: ComponentFixture<MenuCollatzComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MenuCollatzComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MenuCollatzComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
