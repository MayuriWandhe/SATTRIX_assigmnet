import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent implements OnInit {

  registerForm!: FormGroup;
  password : any
  constructor(
    private formBuilder : FormBuilder,
    private router: Router
  ) { }


  ngOnInit(): void {
    this.registerForm = this.formBuilder.group({
      'name' : ['', Validators.required],
      'email' : ['', Validators.required],
      'phone' : ['', Validators.required],
      'city' : ['', Validators.required],
   })

   this.password = sessionStorage.getItem('password')
   this.getUerDetails()
  }

  getUerDetails(){
    this.registerForm.patchValue({
      'name' : sessionStorage.getItem('name'),
      'email' : sessionStorage.getItem('email'),
      'phone' : sessionStorage.getItem('phone'),
      'city' : sessionStorage.getItem('name')
    })
  }


  onSubmit(){
    
    if(this.registerForm.valid){
      sessionStorage.setItem('name',this.registerForm.value.name);
      sessionStorage.setItem('email',this.registerForm.value.email);
      sessionStorage.setItem('phone',this.registerForm.value.phone);
      sessionStorage.setItem('city',this.registerForm.value.city);
      sessionStorage.setItem('password',this.password);
      alert('Data added successfully!');
      this.router.navigate(['/dashboard/user-list']);
    }else{
      console.log('Please check all the fields!');
      
    }
  }

}
