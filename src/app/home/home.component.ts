import { ViewportScroller } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'aafl-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  
  constructor(private viewportScroller: ViewportScroller) {}
    
  public scrollTo(location: string): void { 
    this.viewportScroller.scrollToAnchor(location);
  }
  
}