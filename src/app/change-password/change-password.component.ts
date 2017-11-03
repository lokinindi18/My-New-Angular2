import { async } from '@angular/core/testing';
import { PasswordValidator } from './../common/validators/password.validator';
import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.css']
})
export class ChangePasswordComponent {

  form = new FormGroup({
    'oldpassword': new FormControl('', Validators.required, PasswordValidator.asyncInvalid),
    'newpassword': new FormControl('', [Validators.required, Validators.minLength(3)]),
    'confirmpassword': new FormControl('', [Validators.required, Validators.minLength(3)]),
  }, PasswordValidator.formValidator);

  get oldpassword() {
    return this.form.get('oldpassword');
  }

  get newpassword() {
    return this.form.get('newpassword');
  }

  get confirmpassword() {
    return this.form.get('confirmpassword');
  }

  onSubmit() {
    if (this.newpassword !== this.confirmpassword) {
        this.form.setErrors({passwordMismatch: false});
    }
  }
}
