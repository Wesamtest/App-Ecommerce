import { Component, inject, OnInit, ChangeDetectorRef } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Auth } from '../../core/service/auth/auth';
import { CookieService } from 'ngx-cookie-service';
import { Router } from '@angular/router';
//  import { Token } from '@angular/compiler';
@Component({
  selector: 'app-forget-password',
  imports: [ReactiveFormsModule],
 
templateUrl: './forget-password.html',
  styleUrl: './forget-password.css',
})
export class ForgetPassword implements OnInit {

  private readonly auth=inject(Auth)
  private readonly cookieService=inject(CookieService)
  private readonly router=inject(Router)
  private readonly changeDetectorRef=inject(ChangeDetectorRef)

  verifyEmail!:FormGroup;
  verifyCode!:FormGroup;
  resetPassword!:FormGroup;
  flag:boolean=true

  step:number=1
  togglePasswordflag():void{
    this.flag=!this.flag
  }

 ngOnInit(): void {
   this.initForm()
 }

  initForm():void{
    this.verifyEmail=new FormGroup({
      email:new FormControl("",[Validators.required, Validators.email])
    })

    this.verifyCode=new FormGroup({
      resetCode:new FormControl("",[Validators.required])
    })

      this.resetPassword=new FormGroup({
      email:new FormControl("",[Validators.required, Validators.email]),
      newPassword:new FormControl("",[Validators.required, Validators.pattern(/^[A-Z](?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&]).{7,}$/)])
    })
   
  }

  formVerfiyEmail():void{
    if(this.verifyEmail.valid){

        this.auth.submitVerifyEmail(this.verifyEmail.value).subscribe({
        next:(res)=>{
          console.log(res);
          this.step=2
          this.changeDetectorRef.detectChanges()
      }
    })
    }
  }

  formVerfiyCode():void{
    if(this.verifyCode.valid){

        this.auth.submitVerifycode(this.verifyCode.value).subscribe({
        next:(res)=>{
          console.log(res);
          this.step=3
          this.changeDetectorRef.detectChanges()
      }
    })
    }
  }

  formResetPassword():void{
    if(this.resetPassword.valid){

        this.auth.submitResetPassword(this.resetPassword.value).subscribe({
        next:(res)=>{
          console.log(res);
          
          this.cookieService.set('token',res.token,1,'/')
          this.router.navigate(['/login'])
          this.changeDetectorRef.detectChanges()
      }
    })
    }
  }


}
