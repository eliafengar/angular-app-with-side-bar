import { AppRoutingModule } from './app-routing/app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { Link1Component } from './link1/link1.component';
import { Link2Component } from './link2/link2.component';
import { Link1SidebarComponent } from './link1-sidebar/link1-sidebar.component';
import { Link2SidebarComponent } from './link2-sidebar/link2-sidebar.component';

@NgModule({
  declarations: [
    AppComponent,
    Link1Component,
    Link2Component,
    Link1SidebarComponent,
    Link2SidebarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
