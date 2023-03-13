import { Injectable } from '@angular/core';
import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

@Injectable({ providedIn: 'root' })
export class ValidatorsService {

    hasACapitalLetter: ValidatorFn = (control: AbstractControl): ValidationErrors | null => {
        const password = control.value as string
        return (password.match(/[A-Z]+/) || !password) 
        ? null 
        : {hasACapitalLetter: true}
    }

    hasASmallLetter: ValidatorFn = (control: AbstractControl): ValidationErrors | null => {
        const password = control.value as string
        return (password.match(/[a-z]+/) || !password) 
        ? null 
        : {hasASmallLetter: true}
        
    }

    hasANumber: ValidatorFn = (control: AbstractControl): ValidationErrors | null => {
        const password = control.value as string
        return (password.match(/[0-9]+/) || !password) 
        ? null 
        : {hasANumber: true}
    } 

    hasASpecialSign: ValidatorFn = (control: AbstractControl): ValidationErrors | null => {
        const password = control.value as string
        return (password.match(/[*@!#%&()^~{}]+/) || !password) 
        ? null 
        : {hasASpecialSign: true}
    }

    samePassword : ValidatorFn = (control: AbstractControl): ValidationErrors | null => {
        const password = control.get('password')?.value as string
        const confirmPassword = control.get('confirmPassword')?.value as string

       return ( !password || !confirmPassword || password === confirmPassword ) 
       ? null 
       : (control.get('samePassword')?.setErrors({ samePassword: 'Passwords are not the same' }), 
       { samePassword: 'Passwords are not the same' })
        
    }


}
