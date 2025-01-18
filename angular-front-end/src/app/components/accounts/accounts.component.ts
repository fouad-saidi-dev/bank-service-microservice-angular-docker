import {Component, OnInit} from '@angular/core';
import {CommonModule} from "@angular/common";
import {HttpClient, HttpClientModule} from "@angular/common/http";
import {environment} from "../../../environments/environment.development";

@Component({
    selector: 'app-accounts',
    standalone: true,
    imports: [
      CommonModule, HttpClientModule
    ],
    templateUrl: './accounts.component.html',
    styleUrl: './accounts.component.css'
})
export class AccountsComponent implements OnInit {
    accounts: any;
    constructor(private http: HttpClient) {
    }

    ngOnInit() {
        this.http.get(`${environment.apiUrl}/ACCOUNT-SERVICE/accounts`)
            .subscribe({
                next: data => {
                    this.accounts = data;
                    console.log("Accounts ==> ", data)
                },
                error: err => console.log(err)
            })
    }
}
