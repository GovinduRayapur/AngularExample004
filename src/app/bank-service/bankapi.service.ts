import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CustomerComponent } from '../bank/customer/customer.component';

@Injectable({
  providedIn: 'root'
})
export class BankapiService {

  constructor(private http:HttpClient) { }

  getCustomers(){
    return this.http.get("http://localhost:3000/customers")
  }

  saveCustomer(customer){
    return this.http.post("http://localhost:3000/customers",customer)
  }

  deleteCustomer(id){
    return this.http.delete("http://localhost:3000/customers/"+id)
  }

}
