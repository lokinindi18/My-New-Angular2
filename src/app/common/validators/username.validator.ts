import { AbstractControl, ValidationErrors } from '@angular/forms';

export class UsernameValidator {
    static cannotContainSpace(control: AbstractControl): ValidationErrors | null {
        // if contains space then return validation errors
        // refere angular.io for more details about the defination
        if ((control.value as string).indexOf(' ') >= 0) {
            return {cannotContainSpace: true};
        }
        // else return success
        return null;
    }
}
