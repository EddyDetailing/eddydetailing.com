import { Routes } from '@angular/router';

import { PageLayoutComponent } from './layout/page-layout/page-layout.component';
import { AboutPageComponent } from './pages/about/about-page.component';
import { ContactPageComponent } from './pages/contact/contact-page.component';
import { HomeComponent } from './pages/home/home.component';
import { ServicesPageComponent } from './pages/services/services-page.component';

export const routes: Routes = [
  {
    path: '',
    component: PageLayoutComponent,
    children: [
      {
        path: '',
        component: HomeComponent,
      },
      {
        path: 'services',
        component: ServicesPageComponent,
      },
      {
        path: 'contact',
        component: ContactPageComponent,
      },
      {
        path: 'about',
        component: AboutPageComponent,
      },
    ],
  },
];
