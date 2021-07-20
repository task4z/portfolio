import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'aafl-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  public years: number = 0;
  public showMore: boolean = false;
  
  constructor(public translate: TranslateService) { 
  }

  public ngOnInit(): void {
    this.service();
  }

  private service(): void{
    this.translate.get('home.startDate').subscribe((data:any)=> {
      this.years = new Date((new Date() as any) - (new Date(data)as any)).getUTCFullYear()-1970;
    });
  }


}
