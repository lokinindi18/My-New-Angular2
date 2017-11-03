import { AbstractControl, ValidationErrors } from '@angular/forms';

export class PasswordValidator {
  // tslint:disable-next-line:one-line
  static asyncInvalid(control: AbstractControl) {
    // after user enters characters, it will wait for 2 secs before returning validation msg
    return new Promise((resolve) => {
      setTimeout(() => {
        if (control.value !== '123') {
          resolve({ asyncInvalidPassword: true });
        } else {
          resolve(null);
        }
      }, 2000);
    });
  }

  static formValidator(control: AbstractControl) {
    // tslint:disable-next-line:prefer-const
    let newPassword = control.get('newpassword');
    // tslint:disable-next-line:prefer-const
    let confirmPassword = control.get('confirmpassword');

    if (newPassword && confirmPassword && newPassword.value !== confirmPassword.value) {
      return { passwordMismatch: true };
    }

    return null;
  }
}
