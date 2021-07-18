import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { Contact } from '../../models/contact-model';
import { ContactService } from '../../services/contact.service';

@Component({
  selector: 'aafl-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {

  public error = null;
  public success = null;
  public contactForm: FormGroup = new FormGroup({
    name: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, 
      Validators.pattern('[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+')]),
    phone: new FormControl('', []),
    message: new FormControl('',[Validators.required])
  });

  constructor(public translate: TranslateService,
    private contactService: ContactService,
    private router: Router) { }

  public submitContact(): void {
    this.contactService.send(this.contactForm.value as Contact).subscribe(
      res => {
        if(res.result === "success"){
          this.router.navigate(['contact/thanks']);
        } else{
          this.error = res.msg;
        }
      });
  }

}