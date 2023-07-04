import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { StartComponent } from './start/start.component';


const routes: Routes = [  
    {path: '',redirectTo:'start',pathMatch:'full' },
    {path: 'home',component:HomeComponent},
    {path: 'start',component:StartComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
