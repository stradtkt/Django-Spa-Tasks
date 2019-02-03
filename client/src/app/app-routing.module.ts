import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TasksComponent } from './components/tasks/tasks.component';
import { CompletedComponent } from './components/completed/completed.component';
import { ActiveComponent } from './components/active/active.component';


const routes: Routes = [
  {path: '', component: TasksComponent},
  {path: 'completed', component: CompletedComponent},
  {path: 'active', component: ActiveComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
