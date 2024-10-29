import { Component, inject } from '@angular/core';
import { AuthService } from '../auth.service';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [FormsModule,CommonModule,ReactiveFormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {

  private authSevice = inject(AuthService);
  private formsBuilder = inject(FormBuilder);

  registerForm : FormGroup = this.formsBuilder.group({
    username : ['',[Validators.required]],
    password: ['',[Validators.required]]
  })

  OnSubmitRegister():void{
    console.log('Register form values:',this.registerForm.value);
    if(!this.registerForm.valid){
      alert("Please fill fields propoerly!");
    }
    if(this.registerForm.valid){
      const {username,password} = this.registerForm.value;
      this.authSevice.register(username,password).subscribe(
        (response:any)=> console.log({response}),
        (error:any)=>console.log({error}
        )
      )
    }
  }


}
