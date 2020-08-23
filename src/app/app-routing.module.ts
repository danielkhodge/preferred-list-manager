import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AddFflComponent } from './add-ffl/add-ffl.component';
import { FflListComponent } from './ffl-list/ffl-list.component';
import { AboutComponent } from './about/about.component';


const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot([
    {path: 'home-page', component: HomePageComponent},
    {path: 'add-ffl', component: AddFflComponent},
    {path: 'ffl-list', component: FflListComponent},
    {path: 'about', component: AboutComponent},
    {path: '', redirectTo: 'home-page', pathMatch: 'full'},
    {path: '**', component: PageNotFoundComponent},
  ])],
  exports: [RouterModule]
})
export class AppRoutingModule { }
