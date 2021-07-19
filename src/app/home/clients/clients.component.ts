import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'aafl-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.scss']
})
export class ClientsComponent implements OnInit {

  public clients: any;

  constructor(
    private translate: TranslateService) { }

  ngOnInit(): void {
    this.getClients();
  }

  // !!!TODO not updating language
  private getClients(): void {
    this.translate.get('clients.list').subscribe( e =>{
      this.clients = e;
    });
  }

  public openTab(site: string):void {
    window.open(site, '_blank');
  }
}
