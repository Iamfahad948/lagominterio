import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProjectComponent } from './project/project.component';
import { AboutComponent } from './about/about.component';
import { PlansComponent } from './plans/plans.component';
import { DrawingsComponent } from './drawings/drawings.component';
import { ElevationsComponent } from './elevations/elevations.component';
import { DesignsComponent } from './designs/designs.component';

const routes: Routes = [
  {path:"", component: HomeComponent},
  {path:"project", component: ProjectComponent},  
  {path:"plans", component: PlansComponent},  
  {path:"designs", component: DesignsComponent},
  {path:"drawings", component: DrawingsComponent},  
  {path:"elevations", component: ElevationsComponent},  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
