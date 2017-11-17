import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  public communication:Array<Object> = [
    {key: 'Mobile', value: '+38068-021-00-21'},
    {key: 'Email', value: 'stanislav.perepelitsa@gmail.com'},
    {key: 'Skype', value: 'Oporonic88s'}
  ];

  constructor() { }

  ngOnInit() {
  }

}
