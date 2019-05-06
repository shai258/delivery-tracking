import { Component } from '@angular/core'

import { DataService } from './data.service';
import { Order } from './order.model';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{
  order: Order;

  constructor(private dataService: DataService) { }

  createNewOrder() {
    this.dataService.newOrder()
    .subscribe(order => {
      this.order = order
    })
  }
}