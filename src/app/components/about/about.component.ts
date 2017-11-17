import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  public goals = {
    'title': 'Goals',
    'text': 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur doloremque dolorum enim et facere natus, nihil placeat provident rerum vitae. Ad asperiores corporis eaque enim ipsa, ipsam iure laudantium modi nam nostrum optio porro quo rem repudiandae rerum sapiente sit sunt velit voluptatibus voluptatum. A accusantium architecto atque error ipsa laborum magnam porro recusandae, unde ut. Aspernatur exercitationem maxime necessitatibus.'
  };

  public dreams = {
    'title': 'Dreams',
    'text': 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. A delectus esse id impedit in ipsam ipsum iure, maxime modi nisi porro quaerat quam, rerum sint soluta tempora velit. Aliquid distinctio eos maiores optio possimus reiciendis repellat reprehenderit soluta suscipit vel. Adipisci beatae consequatur deserunt dolor dolore eaque error excepturi fuga illo iusto, natus neque pariatur quam soluta tempora tempore velit.'
  };

  constructor() { }

  ngOnInit() {
  }


}
