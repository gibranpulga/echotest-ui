import { Component, OnInit, ViewChild } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  ngOnInit(): void {
    throw new Error("Method not implemented.");
  }

  // @ViewChild("mat-progress-spinner") loading;
  // checkoutForm;
  // fields;

  // constructor(){}

  // ngOnInit() {}

  name = new FormControl('', [Validators.required]);
  amount = new FormControl('', [Validators.required]);


  getErrorMessageName() {
    if (this.name.hasError('required')) {
      return 'You must enter a name';
    }

    return this.name.hasError('name') ? 'Not a valid name' : '';
  }

  getErrorMessageAmount() {
    if (this.amount.hasError('required')) {
      return 'You must enter a value';
    }

    return this.amount.hasError('amount') ? 'Not a valid amount' : '';
  }

  // onSubmit() {
  //   this.loading.hidden = false;
  //  //http request stuff
  // }

}
