import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms'
import { AuthService } from '../auth.service';
import { HttpClient } from '@angular/common/http'

import { Router } from '@angular/router'

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  public user = {};

  constructor(private _authService: AuthService, private formBuilder: FormBuilder, private httpClient: HttpClient, private router: Router) { }

  updateForm: FormGroup;
  isSubmitted: boolean = false;


  ngOnInit() {

    this.updateForm = this.formBuilder.group({
      contry: ['', Validators.required],
      addressline: ['', Validators.required],
      zipcode: ['', Validators.required],
      city: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', Validators.required]
    
    })


    this._authService.getUser()
      .subscribe(data => this.user = data);

    this._authService.getUser()
      .subscribe(data => this.updateForm.patchValue(data));
  }

  updateUser() {

    this.isSubmitted = true;

    if(this.updateForm.invalid) {
      alert("validation error")
      return;
    }

    this._authService.update(this.updateForm.value).subscribe((updateres) => {
    //   if(updateres["success"]) {
         window.alert('Uppdateringen lyckades');
    //   }    
     })
  
}


}
