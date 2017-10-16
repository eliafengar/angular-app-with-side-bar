import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  private title = 'app';

  private opened: boolean;
  private sideBarColumnSpan: number;
  private contentColumnSpan: number;

  ngOnInit() {
    this.toggleSidebar(false);
  }

  toggleSidebar(isOpen: boolean) {
    this.opened = isOpen;
    if (isOpen) {
      this.sideBarColumnSpan = 2;
      this.contentColumnSpan = 10;
    } else {
      this.sideBarColumnSpan = 2;
      this.contentColumnSpan = 12;
    }
  }
}
