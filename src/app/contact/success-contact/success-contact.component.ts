import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-success-contact',
  templateUrl: './success-contact.component.html',
  styleUrls: ['./success-contact.component.scss']
})
export class SuccessContactComponent {

  constructor(public translate: TranslateService) { }

}
