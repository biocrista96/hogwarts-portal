import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { HousesComponent } from './home/houses/houses.component';
import { ProfessorsComponent } from './home/professors/professors.component';
import { StudentsComponent } from './home/students/students.component';
import { WelcomeComponent } from './home/welcome/welcome.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children:[
      { 
        path:'welcome', component: WelcomeComponent
      },
      { 
        path:'houses', component: HousesComponent
      },
      { 
        path:'students', component: StudentsComponent
      },
      { 
        path:'professors', component: ProfessorsComponent
      },
      { 
        path:'', redirectTo:'welcome', pathMatch: 'full'
      },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
