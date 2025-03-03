import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

import { FooterComponent } from '../footer/footer.component';
import { NavbarComponent } from '../navbar/navbar.component';

@Component({
  selector: 'app-container-layout',
  standalone: true,
  imports: [NavbarComponent, FooterComponent, RouterModule],
  templateUrl: './container-layout.component.html',
  styleUrl: './container-layout.component.scss',
})
export class ContainerLayoutComponent {}
