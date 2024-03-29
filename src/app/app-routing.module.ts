import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { LayoutComponent } from './layout/layout.component';

const routes: Routes = [

  {
    path:'', redirectTo:'register', pathMatch:'full'
  },
  {
    path:'login', component:LoginComponent
  },
  {
    path:'',
    component:LayoutComponent,
    children:[
      {path:'home', component:HomeComponent},
      {path: 'about', component: AboutComponent}
    ]
  },
  {
    path:'register', component:RegisterComponent
  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

