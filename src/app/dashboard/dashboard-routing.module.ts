import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { ListComponent } from './list/list.component';
import { RegisterComponent } from './register/register.component';
import { EditUserComponent } from './edit-user/edit-user.component';

const routes: Routes = [
  {
    path : '',
    component : RegisterComponent
  },
  {
    path : 'register-user',
    component : RegisterComponent
  },
  {
    path : 'user-list',
    component : ListComponent
  },
  {
    path : 'edit-user',
    component : EditUserComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
