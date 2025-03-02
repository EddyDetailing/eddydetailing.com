import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faBars, faGlobe, faXmark } from '@fortawesome/free-solid-svg-icons';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, FontAwesomeModule, RouterModule, TranslateModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
})
export class NavbarComponent {
  icons = {
    globe: faGlobe,
    hamburgerMenu: faBars,
    xMark: faXmark,
  };
  mobileMenuVisible = false;

  constructor(private translate: TranslateService) {}

  changeLanguage(language: string): void {
    this.translate.use(language);
  }

  toggleMenu(): void {
    this.mobileMenuVisible = !this.mobileMenuVisible;
  }
}
