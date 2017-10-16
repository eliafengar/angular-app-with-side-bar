import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Link2SidebarComponent } from './link2-sidebar.component';

describe('Link2SidebarComponent', () => {
  let component: Link2SidebarComponent;
  let fixture: ComponentFixture<Link2SidebarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Link2SidebarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Link2SidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
