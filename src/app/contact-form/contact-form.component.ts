import { Component, OnInit } from '@angular/core';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})
export class ContactFormComponent {
  allMethods = [
    {id: '1', name: 'Email'},
    {id: '2', name: 'Phone'},
    {id: '3', name: 'Web'},
    {id: '4', name: 'Fax'},
    {id: '5', name: 'Mail'}
  ];

  onSubmit(form) {
    console.log(form);
  }

}
