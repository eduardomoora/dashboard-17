import { Component } from '@angular/core';
import {routes} from "../../app.routes";
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-side-menu',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: 'side-menu.component.html',
})
export class SideMenuComponent {
  dashboardRoutes =  this.buildRoutes();


  buildRoutes() {
    return routes
      .map(route => route.children ?? [])
      .flat()
      .filter(route => route && route.path && !route.path.includes(':'));
  }
}
