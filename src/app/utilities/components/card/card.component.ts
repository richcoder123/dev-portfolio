import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  @Input() cardConfig: any;

  constructor() { 
    let a = 5;
  }

  ngOnInit(): void {
    let b = 10;
  }

}
