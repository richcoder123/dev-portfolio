import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.css']
})

export class AboutMeComponent implements OnInit {

  intro = {
    name: 'My name is Aman Gupta.',
    currentWork: `I am currently working on full stack, primarily focused on front-end using
    angular, in the engineering team at CSG International.`,
    likes: `I like building apps and new features. Also, I like problem solving.
    I also love talking to fellow developers.
    In recent past, I delivered a few talks in tech spaces and enjoyed it the most.`,
    lookingFor: `Currently, I am looking for mid or senior development roles.
    Hit Contact tab, if you have a relevant opportunity for me or want me to speak in your college or tech space.`
  };

  constructor() { }

  ngOnInit(): void {
  }

}
