import { Component, OnInit } from '@angular/core';
import { STEPS } from '../steps';
import { Step } from '../step.model';
import { Order } from '../order.model';
import { DataService } from '../data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tracking',
  templateUrl: './tracking.component.html',
  styleUrls: ['./tracking.component.css']
})
export class TrackingComponent implements OnInit {
  order: Order;
  steps: Step[] = STEPS;
  query: string = this.router.url.slice(7);
  
  constructor(private dataService: DataService, private router: Router) { }
  
  ngOnInit() {
    this.dataService.getOrder(this.query)
    .subscribe(order => {
      this.order = order
      this.updateTracking()
    })
  }
  
  passStep() {
    this.dataService.promoteStep(this.query)
      .subscribe(hasPassed => {
        if(hasPassed){
          this.order.orderStatus++
          STEPS[this.order.orderStatus-1].happened = true
        }
      })
  }

  updateTracking() {
    for(let i in this.steps){
      (+i<this.order.orderStatus) ? STEPS[i].happened = true : STEPS[i].happened = false
    }
  }
}