import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Order } from 'src/app/shipmen/shipmen.component';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class OrderDateService {

  constructor(
    private http:HttpClient
  ) { }

  retrieveAllOrders(username:any)
  {
    console.log("hello")
    return this.http.get<Order[]>(`http://localhost:8080/${username}/orders`)
  }

 
  deleteOrder(username:any, id:any){
    console.log(`http://localhost:8080/${username}/orders/${id}`);
    return this.http.delete(`http://localhost:8080/${username}/orders/${id}`);
  }
  retrieveOrder(username:any, id:any){
    return this.http.get<Order>(`http://localhost:8080/${username}/orders/${id}`);
  }

  updateOrder(username:any, id:any, order:any){
    return this.http.put<Order>(`http://localhost:8080/${username}/orders/${id}`,order);
  }
  
  getStatus(id:any)
  {
    return this.http.get<Order>(`http://localhost:8080/orders/${id}`);
  }
}
