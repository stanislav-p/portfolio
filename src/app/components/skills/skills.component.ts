import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent implements OnInit {
  public skills: any = [
    {name: 'HTML5', level: Array(15)},
    {name: 'CSS3', level: Array(7)},
    {name: 'JavaScript', level: Array(9)},
    {name: 'ReactJS', level: Array(2)},
    {name: 'AngularJS', level: Array(5)},
  ];

  constructor() { }

  ngOnInit() {
  }

}
