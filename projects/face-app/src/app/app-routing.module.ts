import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {SignInComponent} from "./components/reusable/sign-in/sign-in.component";
import {LogInComponent} from "./components/reusable/log-in/log-in.component";
import {TimeLineComponent} from "./components/reusable/time-line/time-line.component";

const routes: Routes = [
  { path: '', redirectTo: '/time-line', pathMatch: "full" },
  { path: 'time-line', component: TimeLineComponent},
  { path: 'time-line/:id', component: TimeLineComponent},
  { path: 'sign-in', component: SignInComponent},
  { path: 'log-in', component: LogInComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
