import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SuccessContactComponent } from './home/contact/success-contact/success-contact.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'thanks', component: SuccessContactComponent },
  { path: '**', redirectTo: '/home' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{ anchorScrolling: 'enabled'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
