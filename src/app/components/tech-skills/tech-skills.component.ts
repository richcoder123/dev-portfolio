import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tech-skills',
  templateUrl: './tech-skills.component.html',
  styleUrls: ['./tech-skills.component.css']
})
export class TechSkillsComponent implements OnInit {

  sectionConfig = [
    {
      title: 'Technologies',
      content: ['Javascript', 'Typescript', 'HTML', 'CSS', 'C++']
    },
    {
      title: 'Frameworks',
      content: ['Angular', 'Protractor', 'Cypress', 'Jasmine']
    },
    {
      title: 'Tools',
      content: ['VS code', 'Putty', 'SQL Developer']
    },
    {
      title: 'Products',
      content: ['Singleview', 'CATIA', 'ENOVIA']
    },
    {
      title: 'Miscellaneous',
      content: ['Code reviews', 'Feature Grooming', 'Mentoring']
    },
    {
      title: 'Version Control',
      content: ['Git', 'svn']
    },
    {
      title: 'Operating Systems',
      content: ['Windows', 'Unix']
    },
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
