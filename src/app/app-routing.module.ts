import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { UsertableComponent } from './usertable/usertable.component';

const routes: Routes = [  
    {path: '',redirectTo:'home',pathMatch:'full' },
    {path: 'home',component:HomeComponent},
    {path: 'login',component:LoginComponent},
    {path: 'users',component:UsertableComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
