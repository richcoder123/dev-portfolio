import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'dev-portfolio';

  urls = ['aboutMe', 'techSkills', 'workExp', 'contactDetails'];

  constructor(private router: Router) {}

  clicked() {
    console.log('clicked');
  }

  tabClick($event: any) {
    console.log($event.index);
    this.router.navigateByUrl(this.urls[$event.index]);
  }



}
