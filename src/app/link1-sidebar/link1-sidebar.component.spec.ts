import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Link1SidebarComponent } from './link1-sidebar.component';

describe('Link1SidebarComponent', () => {
  let component: Link1SidebarComponent;
  let fixture: ComponentFixture<Link1SidebarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Link1SidebarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Link1SidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
