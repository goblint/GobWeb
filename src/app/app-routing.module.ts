import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { DownloadsComponent } from './downloads/downloads.component';
import { OverviewComponent } from './overview/overview.component';
import { PapersComponent } from './papers/papers.component';
import { AuthorsComponent } from './authors/authors.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'downloads', component: DownloadsComponent },
  { path: 'overview', component: OverviewComponent },
  { path: 'papers', component: PapersComponent },
  { path: 'people', component: AuthorsComponent },
  { path: '**', redirectTo: 'home' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }