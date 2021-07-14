import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'aafl-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {

  public projects: any;

  constructor(public translate: TranslateService) { }

  ngOnInit(): void {
    this.getProjects();
  }

  private getProjects(): void {
    this.translate.get('personalProjects.list').subscribe( e => {
      this.projects = e;
    });
  }

}
