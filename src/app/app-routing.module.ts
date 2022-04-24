import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import { CounterComponent } from './counter/counter.component';
import { TimerComponent } from './timer/timer.component';
import { TodosComponent } from './todos/todos.component';
import { UsersComponent } from './users/users.component';

const routes: Routes = [

  {
    path: 'timer',
    component: TimerComponent,
  },

  {
    path: 'users',
    component: UsersComponent,
  },
  {
    path: 'counter',
    component: CounterComponent,
  },
  { 
    path: 'todos',
    component: TodosComponent,


  },

  {
  
path: '**',
redirectTo: 'todos',
pathMatch: 'full',

  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
