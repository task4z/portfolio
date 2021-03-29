import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Contact } from '../models/contact-model';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  constructor(private http: HttpClient) { }

  public incompleteUrl: string = "https://gmail.us1.list-manage.com/subscribe/post-json?u=97e427616d8caf3c33e733fd6&amp;id=5a53cb063d";

  public send(parameter: Contact): Observable<any> {
    const params = new HttpParams()
				.set('EMAIL', parameter.email)
				.set('FNAME', parameter.name)
				.set('LNAME', parameter.message)
				.set('PHONE', parameter.phone)
        .set('b_97e427616d8caf3c33e733fd6_5a53cb063d', '');
        
    const mailChimpUrl = `${this.incompleteUrl}&${params.toString()}`;

    // 'c' refers to the jsonp callback param key. This is specific to Mailchimp
    return this.http.jsonp<any>(mailChimpUrl, 'c');
  }
}
