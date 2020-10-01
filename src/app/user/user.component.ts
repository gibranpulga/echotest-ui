import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, Validators} from '@angular/forms';
import { HttpClient} from '@angular/common/http';

import { environment } from '../../environments/environment';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

    constructor(private fb: FormBuilder, private http: HttpClient) { }

    form = this.fb.group({
        name: ['', Validators.required],
        amount: ['', Validators.required]
    });

    spinner = false;
    input = true;
    success = false;
    failure = false;

  ngOnInit(): void {
  }

  onSubmit(): void {
      this.spinner = true;
      this.input = false;
      const target = `${environment['api_url']}/api/decisions`;
      this.http.post(target, this.form.value).subscribe( response => {
          if (response['decision']) {
              this.spinner = false;
              this.success = true;
          }
          else {
              this.spinner = false;
              this.failure = true;
          }
      });
  }
 

}
