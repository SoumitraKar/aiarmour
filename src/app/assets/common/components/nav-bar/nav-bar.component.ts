import { Component } from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-nav-bar',
  standalone: true,
  imports: [MatIconModule, MatButtonModule, MatToolbarModule, CommonModule],
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.css'
})
export class NavBarComponent {
  constructor(private router: Router) {}
  hidemenu: boolean = true;
  navigateTo (pageName: string) {
    this.hidemenu = true;
    this.router.navigate(['/'+pageName]);
  }
  toggleNavMenu() {
    this.hidemenu = !this.hidemenu;
  }
}
