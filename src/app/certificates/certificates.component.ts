import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'aafl-certificates',
  templateUrl: './certificates.component.html',
  styleUrls: ['./certificates.component.scss']
})
export class CertificatesComponent implements OnInit {

  public certificates: any[] = [];
  
  constructor(public translate: TranslateService) { }

  ngOnInit(): void {
    this.getProjects();
  }

  private getProjects(): void {
    this.translate.get('certificates').subscribe( e => {
      this.certificates = e;
    });
  }

}
