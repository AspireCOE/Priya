import { Component } from '@angular/core';
import { accountHolder } from './accountHolder.model';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-account-holder',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './account-holder.component.html',
  styleUrl: './account-holder.component.css'
})
export class AccountHolderComponent {
  accountTypeInput:String="Savings"

  accountHolders: accountHolder[]=[
  {accountNumber: 12345, acHolderName: "Alice Smith", accountType: "Savings", amount: 1000, date: "2023-06-21" },
  {accountNumber: 98765, acHolderName: "Bob Johnson", accountType: "Salary", amount: 2500, date: "2023-07-15"},
  {accountNumber: 54321, acHolderName: "Eva Lee", accountType: "Savings", amount: 15000, date: "2023-08-10"},
  {accountNumber: 67890, acHolderName: "Grace Brown", accountType: "Checking", amount: 3500, date: "2023-09-05"},
  {accountNumber: 13579, acHolderName: "David Miller", accountType: "Bussiness", amount: 8000, date: "2023-10-18"},
  {accountNumber: 24680, acHolderName: "Sophia Chen", accountType: "Salary", amount: 4200, date: "2023-11-30"},
  {accountNumber: 98712, acHolderName: "Liam Wilson", accountType: "Bussiness", amount: 12000, date: "2023-12-22"},
  {accountNumber: 35791, acHolderName: "Olivia Adams", accountType: "Checking", amount: 2800, date: "2024-01-14"},
  {accountNumber: 46802, acHolderName: "Noah Lee", accountType: "Savings", amount: 9500, date: "2024-02-27"},
  {accountNumber: 57913, acHolderName: "Emma Garcia", accountType: "Checking", amount: 180, date: "2024-03-10"}
  ]
  

}
