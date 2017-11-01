import { AbstractControl, ValidationErrors } from '@angular/forms';

export class PasswordValidator {
    static asyncInvalid(control: AbstractControl): Promise<ValidationErrors | null> {
        return new Promise(resolve => {
            setTimeout(() => {
              if ( control.value !== '123' ) {
                resolve({
                  asyncInvalid: true
                })
              } else {
                resolve(null);
              }
            }, 3000);
          })

    }
}
