import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/welcome' },
  { path: 'welcome', loadChildren: () => import('./pages/welcome/welcome.module').then(m => m.WelcomeModule) },
  { path: 'home', loadChildren: () => import('./pages/home/home.module').then(m => m.HomeModule)},
  {path: 'post&story', loadChildren: () => import('./pages/post-and-story/post-and-story.module').then((m => m.PostAndStoryModule))}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
