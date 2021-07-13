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

  private getClients(): void {
    this.translate.get('clients.list').subscribe( e =>{
      this.clients = e;
    });
  }
}
