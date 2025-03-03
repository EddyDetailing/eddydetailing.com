import { Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { PageLayoutComponent } from './layout/page-layout/page-layout.component';

export const routes: Routes = [
  {
    path: '',
    component: PageLayoutComponent,
    children: [
      {
        path: '',
        component: HomeComponent,
      },
    ],
  },
];
