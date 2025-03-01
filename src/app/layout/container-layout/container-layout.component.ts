import { Component } from '@angular/core';

import { FooterComponent } from '../footer/footer.component';
import { NavbarComponent } from '../navbar/navbar.component';
import { PageLayoutComponent } from '../page-layout/page-layout.component';

@Component({
  selector: 'app-container-layout',
  standalone: true,
  imports: [NavbarComponent, FooterComponent, PageLayoutComponent],
  templateUrl: './container-layout.component.html',
  styleUrl: './container-layout.component.scss',
})
export class ContainerLayoutComponent {}
