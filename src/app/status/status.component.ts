import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { OrderDateService } from '../service/data/order-date.service';
import { Order } from '../shipmen/shipmen.component';

@Component({
  selector: 'app-status',
  templateUrl: './status.component.html',
  styleUrls: ['./status.component.css']
})
export class StatusComponent implements OnInit {
  id:number=0
  od:Order =new Order(this.id,'','',' ',new Date());
  constructor(
    private orderService:OrderDateService,
    private router:Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    
    this.od = new Order(this.id,'','',' ',new Date());
    
    if(this.id!=-1) {
      this.orderService.retrieveOrder('dev', this.id)
          .subscribe (
            data => this.od = data
          )
    }
  }

}
