import { Component, inject } from '@angular/core';
import { AuthService } from '../auth.service';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule,ReactiveFormsModule,CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  private authSevice = inject(AuthService);
  private formBuilder = inject(FormBuilder);

  loginForm: FormGroup = this.formBuilder.group({
    username: ['',[Validators.required]],
    password: ['',[Validators.required]]
  })

  onSubmitLogin(){
    console.log("Login Form:",this.loginForm)
    if(!this.loginForm.valid){
      return alert('Please fill required fields properly!');
    }
    if(this.loginForm.valid){
      const {username,password} = this.loginForm.value;
      this.authSevice.login(username,password).subscribe(
        (response)=>console.log({response}),
        (error)=>console.error({error})
      )
    }
  }
}
