import { ErrorHandler } from '@angular/core';

export class AppGlobalErrorHandler implements ErrorHandler {
  handleError(error) {
    alert('Unexpected error occurred.');
  }
}
