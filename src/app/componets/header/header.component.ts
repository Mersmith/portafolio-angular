import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  isMenuOpen: boolean = false;
  activeItem: number | null = null;

  toggleMenu(): void {
    this.isMenuOpen = !this.isMenuOpen;
  }

  toggleSubItems(item: number): void {
    if (this.activeItem === item) {
      this.activeItem = null;
    } else {
      this.activeItem = item;
    }
  }
  
}
