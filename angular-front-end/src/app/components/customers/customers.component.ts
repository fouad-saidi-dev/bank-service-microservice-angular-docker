import {Component, OnInit} from '@angular/core';
import {CommonModule} from "@angular/common";
import {HttpClient, HttpClientModule} from "@angular/common/http";
import {environment} from "../../../environments/environment.development";

@Component({
  selector: 'app-customers',
  standalone: true,
  imports: [CommonModule,HttpClientModule],
  templateUrl: './customers.component.html',
  styleUrl: './customers.component.css'
})
export class CustomersComponent implements OnInit{
  customers: any;
  constructor(private http: HttpClient) {
  }
  ngOnInit(): void {
    this.http.get(`${environment.apiUrl}/CUSTOMER-SERVICE/customers`)
        .subscribe({
            next: data => {
                this.customers = data;
                console.log("Customers ==> ", data)
            },
            error: err => console.log(err)
        })
  }

}
