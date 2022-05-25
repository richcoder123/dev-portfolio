import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tech-skills',
  templateUrl: './tech-skills.component.html',
  styleUrls: ['./tech-skills.component.css']
})
export class TechSkillsComponent implements OnInit {

  chipsConfig = {
    Technologies: ['Javascript', 'Typescript', 'HTML', 'CSS', 'C++', 'C'],
    Frameworks: ['Angular', 'Protractor', 'Cypress', 'Jasmine'],
    Tools: ['SQL Developer', 'VS code', 'Putty'],
    'Version Control': ['Git', 'svn'],
    'Operating Systems': ['Unix', 'Windows'],
  };

  sectionConfig = [
    {
      title: 'Technologies',
      content: ['Javascript', 'Typescript', 'HTML', 'CSS', 'C++', 'C']
    },
    {
      title: 'Frameworks',
      content: ['Angular', 'Protractor', 'Cypress', 'Jasmine']
    },
    {
      title: 'Tools',
      content: ['SQL Developer', 'VS code', 'Putty']
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
