import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomePage } from './home.page';

const routes: Routes = [
  {
    path: '',
    component: HomePage
  },
  {
    path: 'detail/:id',
    loadChildren: () => import('../../modules/recipes/detail/detail.module').then( m => m.DetailPageModule)
  },
  {
    path: 'all',
    loadChildren: () => import('../../modules/recipes/all/all.module').then( m => m.AllPageModule)
  },
  {
    path: 'menu/:id',
    loadChildren: () => import('../../modules/recipes/menu/menu.module').then( m => m.MenuPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomePageRoutingModule {}
