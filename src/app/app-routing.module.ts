import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import{TemplComponent} from './templ/templ.component'
import { ReactformComponent } from './reactform/reactform.component';

const routes: Routes = [
  {path:'', component:HomeComponent,pathMatch:'full'
  // children: [{
  //     path: 'templete',
  //     component: TemplComponent
  //   }]
},
{path:'templateform/:id',component:TemplComponent},
{path:'reactform',component:ReactformComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
