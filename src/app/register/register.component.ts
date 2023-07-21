import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerForm!: FormGroup;

  constructor(
    private formBuilder : FormBuilder,
    private router: Router
  ) { }

  ngOnInit(): void {
   this.registerForm = this.formBuilder.group({
      'userName' : ['', Validators.required],
      'email' : ['', Validators.required],
      'password' : ['', Validators.required],
      'cPassword' : ['', Validators.required],
   })
  }

  onSubmit(){
    if(this.registerForm.value.password != this.registerForm.value.cPassword){
      alert('password is not equal to confirm password');

    }else{
      if(this.registerForm.valid){
        sessionStorage.setItem('userName',this.registerForm.value.userName);
        sessionStorage.setItem('email',this.registerForm.value.email);
        sessionStorage.setItem('password',this.registerForm.value.password);
        this.router.navigate(['/login']);
      }
    }
  }

}
