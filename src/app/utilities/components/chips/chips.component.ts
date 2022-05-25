import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-chips',
  templateUrl: './chips.component.html',
  styleUrls: ['./chips.component.css']
})
export class ChipsComponent implements OnInit {

  @Input() chipsConfig: {} = {};

  constructor() { }

  ngOnInit(): void {
  }

  abc(key: any, val: any) {
    let a = 5;
  }

}
