import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'aafl-technology',
  templateUrl: './technology.component.html',
  styleUrls: ['./technology.component.scss']
})
export class TechnologyComponent implements OnInit {

  public technologys: any[] = [];

  constructor(public translate: TranslateService) { }

  ngOnInit(): void {
    this.getTechnologys();
  }

  private getTechnologys(): void {
    this.translate.get('technologys.list').subscribe( e => {
      this.technologys = e;
    });
  }

}
