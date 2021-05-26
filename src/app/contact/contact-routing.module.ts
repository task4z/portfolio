import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactComponent } from './contact.component';
import { SuccessContactComponent } from './success-contact/success-contact.component';

const routes: Routes = [
  { path: '', component: ContactComponent },
  { path: 'thanks', component: SuccessContactComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContactRoutingModule { }
