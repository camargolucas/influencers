import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: () => import('./pages/home/home.module').then( m => m.HomePageModule)
  },   {
    path: 'missao-modal',
    loadChildren: () => import('./modals/missao-modal/missao-modal.module').then( m => m.MissaoModalPageModule)
  },
  {
    path: 'portfolio-modal',
    loadChildren: () => import('./modals/portfolio-modal/portfolio-modal.module').then( m => m.PortfolioModalPageModule)
  },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
