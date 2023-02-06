import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './pages/layout/main/main.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/home' },
  {
    path: 'welcome',
    loadChildren: () =>
      import('./pages/welcome/welcome.module').then((m) => m.WelcomeModule),
  },
  {
    path: 'home',
    loadChildren: () =>
      import('./pages/home/home.module').then((m) => m.HomeModule),
  },
  {
    path: 'main',
    component: MainComponent,
    children: [
      {
        path: 'post&story',
        loadChildren: () =>
          import('./pages/post-and-story/post-and-story.module').then(
            (m) => m.PostAndStoryModule
          ),
      },
      {
        path: 'campaigns',
        loadChildren: () =>
          import('./pages/campaigns/campaigns.module').then(
            (m) => m.CampaignsModule
          )
      }
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
