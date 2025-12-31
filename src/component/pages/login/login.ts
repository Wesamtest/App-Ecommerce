import { Component, inject, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

import { Auth } from '../../core/service/auth/auth';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { CookieService } from 'ngx-cookie-service';


@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login implements OnInit {
   flag:boolean=true

   private readonly cookieService=inject(CookieService)

   togglePasswordflag():void{
    this.flag=!this.flag
  }
  private readonly auth=inject(Auth)
  private readonly router=inject(Router)

  mesgError:string=""
  msgSuccess:string=""
  isLoading:boolean=false
  isSubmitted: boolean = false;
    subscription:Subscription=new Subscription()

  loginForm!:FormGroup


  ngOnInit(): void {
     this.initForm()
  }

  initForm():void{
    this.loginForm=new FormGroup({
    email: new FormControl(null, [Validators.required, Validators.email]),
    password: new FormControl(null, [
        Validators.required,
        Validators.pattern(/^[A-Z](?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&]).{7,}$/),

      ]),
  })
  }

  submitform(){
    this.isSubmitted = true;

    this.subscription.unsubscribe()

    if(this.loginForm.valid){
      this.isLoading=true
      this.subscription=this.auth.loginFormData(this.loginForm.value).subscribe({
        next:(res)=>{

          if(res.message=='success'){
            setTimeout(()=>{
              this.cookieService.set('token',res.token)
              this.router.navigate(['/home'])

            },1000)

            this.msgSuccess=res.message
           
          }
           this.isLoading=false
        },
        error:(err)=>{

          this.isLoading=false
          this.mesgError=err.error.message|| "Incorrect email or password";
          console.log(this.mesgError)
        }
      })
      console.log(this.subscription)


    }
    else {
    // لو الفورم invalid
    this.mesgError = "Please fill in the required fields correctly";
  }

  }
}
