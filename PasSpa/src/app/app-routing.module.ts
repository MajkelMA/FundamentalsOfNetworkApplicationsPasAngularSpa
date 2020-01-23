import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CreateComponent } from './components/create/create.component';
import { MainComponent } from './components/main/main.component';
import { EditComponent } from './components/edit/edit.component';


const routes: Routes = [
  {
    path: '',
    redirectTo: '/main',
    pathMatch: 'full'
  },
  {
    path: 'main',
    component: MainComponent,
  },
  {
    path: 'create',
    component: CreateComponent
  },
  {
    path: 'edit/:id/:type',
    component: EditComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
