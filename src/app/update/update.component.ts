import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { OrderDateService } from '../service/data/order-date.service';
import { Order } from '../shipmen/shipmen.component';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {

  status:string[] = ["placed","out for delivery","deliverd"]
  odstatus:string ="dev"
  id:number =0
  od:Order = new Order(this.id,'','',' ',new Date());
  constructor(
    private orderService:OrderDateService,
    private route: ActivatedRoute,
    private router: Router
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
  saveTodo()
  {
    console.log(this.od.status);
    this.orderService.updateOrder('dev', this.id, this.od)
          .subscribe (
            data => {
              console.log(data)
              this.router.navigate(['shipmen',this.od.shipmenId])
            }
          )
  }

}
