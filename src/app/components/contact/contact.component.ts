import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  name: String;
  email: String;
  message: String;

  public communication:Array<Object> = [
    {key: 'Phone number', value: '+38068-021-00-21'},
    {key: 'Email', value: 'stanislav.perepelitsa@gmail.com'},
    {key: 'Skype', value: 'Oporonic88s'}
  ];

  constructor() { }

  ngOnInit() {
  }

  onSubmit() {
    const data = {
      name: this.name,
      email: this.email,
      message: this.message
    };

    console.log('Name: ' + data.name + '\nEmail: ' + data.email + '\nMessage: ' + data.message);
  }

}
