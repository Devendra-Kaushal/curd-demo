import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { OrderDateService } from '../service/data/order-date.service';


export class Order{
  constructor(
    public orderId:number,
    public shipmenId:string,
    public customerName:string,
    public status:string,
    public createdAt: Date
  ){}
}
@Component({
  selector: 'app-shipmen',
  templateUrl: './shipmen.component.html',
  styleUrls: ['./shipmen.component.css']
})


export class ShipmenComponent implements OnInit {
  message=""
  orders : Order[] = []
  
  constructor(
    private orderService:OrderDateService,
    private router:Router
  ) { }

  ngOnInit(){
    this.refreshTodos()
  }
  refreshTodos()
  {
    this.orderService.retrieveAllOrders('dev').subscribe(
      response => {
        console.log(response);
        this.orders = response;
      }
    )
  }

  deleteOrder(id:any) {
    console.log(`delete Order ${id}` )
    this.orderService.deleteOrder('dev', id).subscribe(
      response =>{
        this.message = `Delete of Todo ${id} Successful!`;
        this.refreshTodos();
      }
    )
        
  }

  updateOrder(id:any) {
    console.log(`update ${id}`)
    this.router.navigate(['orders',id])
  }

}
