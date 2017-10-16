import { Link2SidebarComponent } from './../link2-sidebar/link2-sidebar.component';
import { Link2Component } from './../link2/link2.component';
import { Link1SidebarComponent } from './../link1-sidebar/link1-sidebar.component';
import { Link1Component } from './../link1/link1.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: '/link1', pathMatch: 'full' },
  {
    path: 'link1', children: [
      {
        path: '',
        component: Link1Component
      },
      {
        path: '',
        component: Link1SidebarComponent,
        outlet: 'sideBar'
      }
    ]
  },
  {
    path: 'link2', children: [
      {
        path: '',
        component: Link2Component
      },
      {
        path: '',
        component: Link2SidebarComponent,
        outlet: 'sideBar'

      }
    ]
  }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
