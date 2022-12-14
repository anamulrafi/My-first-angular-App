import { Component, NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  /**
   * 
   * 
   */
  {
    path: '',
    pathMatch : 'full',
    redirectTo : 'home'
  },
  {
    path: 'home',
    component:HomeComponent
  },
  {
    path: 'about',
    component : AboutComponent
  },
  {
    path: 'contact',
    component : ContactComponent
  },
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
