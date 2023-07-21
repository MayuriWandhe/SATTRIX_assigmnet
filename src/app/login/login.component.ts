import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm!: FormGroup

  constructor(
    private formBuilder : FormBuilder,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      'userName' : ['', Validators.required],
      'password' : ['', Validators.required],
    })

   
    
  }


  onSubmit(){
    if(sessionStorage.getItem('userName') == this.loginForm.value.userName &&
    sessionStorage.getItem('password') == this.loginForm.value.password ){
      console.log('yay');
      console.log(sessionStorage.getItem('userName'));
      this.router.navigate(['/dashboard']);
    }else{
      console.log('nay');
      
    }
  }

}
