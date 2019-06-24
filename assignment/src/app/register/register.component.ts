import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private authService: AuthService, private router: Router, private formBuilder: FormBuilder) { }

  registerForm: FormGroup;
  isSubmitted: boolean = false;


  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      firstname: ['', Validators.required],
      lastname: ['', Validators.required],
      dayofbirth: ['', Validators.required],
      contry: ['', Validators.required],
      addressline: ['', Validators.required],
      zipcode: ['', Validators.required],
      city: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', Validators.required]
    })
  }

  get formControls() { return this.registerForm.controls }


  register() {
    this.isSubmitted = true;

    if(this.registerForm.invalid) {
      return;
    }

    this.authService.register(this.registerForm.value).subscribe((registerres) => {
      if(registerres["success"]) {
        this.authService.login(this.registerForm.value).subscribe((loginres) => {
          if(loginres["success"]) {
            this.router.navigateByUrl('/login');
          }
          else {
            this.router.navigateByUrl('/login');
          }         
        })        
      }    
    })
  }
}
