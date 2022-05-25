import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-work-exp',
  templateUrl: './work-exp.component.html',
  styleUrls: ['./work-exp.component.css']
})
export class WorkExpComponent implements OnInit {

  workExp = [{
    title: 'CSG International',
    subTitle: 'Product developer (Sept. 2018 - Present)',
    content: ['Assess the requirenments coming from product owner and provide estimates.',
  'Implement the server side changes using SQL, Singleview, EPM and REST APIs.',
  'Implement the client side changes using Angular, HTML, CSS.',
  'Write automated test cases using javascript frameworks like cypress, jasmine.',
  'Assisting fellow team members with their deliverables.',
  'Doing code reviews and making sure all deliverables from the team are following right coding standards.'], 
  }, {
    title: 'Dassault Systèmes',
    subTitle: 'R&D Development engineer (May 2016 - August 2018)',
    content: ['Understanding the requirenment and presenting proposed solutions.',
    'Implementing changes required for the feature using C++ on Windows platform.',
    'Preparing design documents.',
    'Writing automated tests to test the new functionality.',
    'Deliver fixes for complex issues.'], 
  }];

  constructor() { }

  ngOnInit(): void {
  }

}
