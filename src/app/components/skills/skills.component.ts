import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent implements OnInit {
  public skills: any = [
    {name: 'HTML5', level: 9},
    {name: 'CSS3', level: 8},
    {name: 'JavaScript', level: 8},
    {name: 'ReactJS', level: 2},
    {name: 'AngularJS', level: 6},
  ];

  constructor() { }

  ngOnInit() {
  }

}
