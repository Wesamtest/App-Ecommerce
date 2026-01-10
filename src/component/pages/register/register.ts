import { Component, inject, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { validateTree } from '@angular/forms/signals';
import { Auth } from '../../core/service/auth/auth';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { ChangeDetectorRef } from '@angular/core';



@Component({
  selector: 'app-register',
  imports: [ReactiveFormsModule],
  templateUrl: './register.html',
  styleUrl: './register.css',
})

export class Register implements OnInit{

  private readonly auth=inject(Auth)
  private readonly router=inject(Router)
  private readonly cdRef = inject(ChangeDetectorRef);

  msgError:string='';
  msgSuccess:string=''
  isLoading:boolean=false;
  flag:boolean=true

  subscription:Subscription=new Subscription()

  togglePasswordflag():void{
    this.flag=!this.flag
  }

  registerForm!:FormGroup


  ngOnInit(): void {
     this.initForm()
  }

  initForm():void{
      this.registerForm=new FormGroup(
     {
      name: new FormControl("", [
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(20),
      ]),
      email: new FormControl("", [Validators.required, Validators.email]),
      password: new FormControl("", [
        Validators.required,
        Validators.pattern(/^[A-Z](?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&]).{7,}$/),
      ]),
      rePassword: new FormControl("", [Validators.required, Validators.pattern(/^[A-Z](?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&]).{7,}$/)]),
      phone: new FormControl("", [
        Validators.required,
        Validators.pattern(/^01[0125][0-9]{8}$/),
      ]),
    },{validators:this.confirmPassword},
  )
  }

  confirmPassword(group:AbstractControl){
    let password=group.get('password')?.value
    let repassword=group.get('rePassword')?.value

    if(password=== repassword){
      return null;
    }else{
      return { mismatch: true }
    }
  }
  
  submitform():void{

     this.subscription.unsubscribe()
    if(this.registerForm.valid){

        this.isLoading=true;

        this.subscription=this.auth.registerFormData(this.registerForm.value).subscribe({
            next:(res)=>{
               
              if(res.message ==='success'){
                console.log(res)
                setTimeout(()=>{
                  this.router.navigate(['/login'])
                },2000)
                 this.msgSuccess=res.message
                this.cdRef.detectChanges();
              }
             
              this.isLoading=false;
          
            },
            error:(err)=>{
              // console.log(error)
             
              this.isLoading=false;
              this.msgError=err.error.message
              console.log(this.msgError)
              console.log(this.isLoading)
              this.cdRef.detectChanges();
            }
          })
      }else{
        this.registerForm.setErrors({mismatch:true})
        this.registerForm.markAllAsTouched()
      }
   
  
  }
}










